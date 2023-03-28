export default class LineToken {
    constructor(
        public access_token: string = '', 
        public token_type: string = '', 
        public refresh_token: string = '', 
        public expires_in: number = 0, 
        public scope: string = '', 
        public id_token: string = '',
        public error: string = '',
        public error_description : string = '') {}
}