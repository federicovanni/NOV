export class User {
constructor(
        
        public id:number,
         
        public  email: string,
         
        public name: string,
         
        public password: string,
         
        public address: string,
         
        public phone: string,
         
        public country?: string | undefined,
         
        public city?: string | undefined
     ) {}
}
