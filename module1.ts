// export namespace inventory{
    export class category{
        constructor(private cateid:string,private catename:string){

        }
        display(){
            console.log("Cateid:"+this.cateid+" Catename:"+this.catename);
        }
    }
    export class product{
        constructor(private prodid:string,private prodname:string){

        }
        display(){
            console.log("prodid:"+this.prodid+" prodname:"+this.prodname);
        }
    }
// }