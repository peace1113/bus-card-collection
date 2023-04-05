import type { RequestHandler } from './$types';
import {MongoDb_ConnectionString} from '$env/static/private';
import { MongoClient } from 'mongodb';
import * as env from '$env/static/private';
import type LineToken from '../../../models/LineToken';
import type LineIdToken from '../../../models/LineIdToken';
import * as jwt from 'jsonwebtoken';
import type User from '../../../models/User';

const token_uri = 'https://api.line.me/oauth2/v2.1/token';
const client = new MongoClient(MongoDb_ConnectionString);

export const GET: RequestHandler = async ({url}) => {
    const code = url.searchParams.get('code');

    let formBody : URLSearchParams = new URLSearchParams();
    formBody.append('grant_type', 'authorization_code');
    formBody.append('code', code ?? '');
    formBody.append('redirect_uri', env.LINE_redirect_uri);
    formBody.append('client_id', env.LINE_client_id);
    formBody.append('client_secret', env.LINE_client_secret);

    const result = await fetch(token_uri, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
    }).then(async (response) => {
        if(response.ok){
            let token = (await response.json()) as LineToken;
            let userInfo = jwt.decode(token.id_token) as LineIdToken;
            let isUserExistedResult = await isUserExisted(userInfo);
            if(isUserExistedResult.result){
                return isUserExistedResult.user;
            }
            else{
                let isBusMemberResult = await isBusMember(userInfo);
                if(isBusMemberResult.result){
                    await client.connect();
                    const database = client.db("BusCards");
                    const users = database.collection<User>("Users");
                    let insertUser = {
                        realName: isBusMemberResult.name, 
                        lineName: userInfo.name, 
                        sub: userInfo.sub, 
                        picture: userInfo.picture,
                    } as User;
                    await users.insertOne(insertUser);
                    return insertUser;
                }
                return null;
            }
        }
    }).catch((reason)=>{
        console.log(reason);
    });

    return new Response(JSON.stringify(result), {status:  200});
};

export const POST: RequestHandler = async ({request}) => {
    const req = await request.json() as LineIdToken;
    let result = {
        isSuccessful: false,
        userInfo: null as User | null
    }

    //check if user is existed
    let isUserExistedResult = await isUserExisted(req);
    if(isUserExistedResult.result){
        result = {isSuccessful: true, userInfo: isUserExistedResult.user};
    }

    //if not existed, check if is bus member
    let isBusMemberResult = await isBusMember(req);

    //if is bus member, insert user
    if(isBusMemberResult.result){
        await client.connect();
        const database = client.db("BusCards");
        const users = database.collection<User>("Users");
        let insertUser = {
            realName: isBusMemberResult.name, 
            lineName: req.name, 
            sub: req.sub, 
            picture: req.picture,
        } as User;
        await users.insertOne(insertUser);
        result = {isSuccessful: true, userInfo: insertUser};
    }

    return new Response(JSON.stringify(result));
};

const isUserExisted = async (userInfo: LineIdToken) => {
    try{
        await client.connect();
        const database = client.db("BusCards");
        const users = database.collection<User>("Users");
        const user = await users.findOne({sub: userInfo.sub});

        if(user){
            return {result: true, user: user};
        }
        else{
            return {result: false, user: null};
        }
    }
    finally{
        await client.close();
    }
}

const isBusMember = async (userInfo: LineIdToken) => {
    try{
        await client.connect();
        const database = client.db("BusCards");
        const members = await database.collection("Members").find({});
        let result = {
            result: false,
            name: ""
        }
        await members.forEach((member) => {
            member.keywords.forEach((keyword : string) => {
                if(userInfo.name.includes(keyword)){
                    result = {result: true, name: member.name};
                }
            })
        });
        return result;
    }
    finally{
        await client.close();
    }
}
