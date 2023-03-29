export default class LineIdToken {
    constructor(
        public iss: string,
        public sub: string, 
        public exp: number, 
        public iat: number, 
        public amr: string [],
        public name: string,
        public picture: string,) {}
}