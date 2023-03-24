import type { RequestHandler } from './$types';
import {MongoDb_ConnectionString} from '$env/static/private';
import { MongoClient } from 'mongodb';
import type CardDex from '../../../models/CardDex';

const client = new MongoClient(MongoDb_ConnectionString);

export async function GET(): Promise<Response> {
    try{
        await client.connect();
        const database = client.db("BusCards");
        const cardDexes = database.collection<CardDex>("CardDex");
        const card = await cardDexes.find({}).toArray();
        
        return new Response(JSON.stringify(card), {status: 200});
    }
    finally{
        await client.close();
    }
};