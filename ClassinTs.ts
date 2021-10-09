class calc{
    private a:number;
    private b:number;
    private res:number;
    constructor(a1:number,b1:number){
        this.a=a1;
        this.b=b1;
    }
    public sum():number{
        this.res=this.a+this.b;
        return this.res;
    }
    mult():number{
        this.res=this.a*this.b;
        return this.res;
    }
}
let obj:calc=new calc(10,20);
console.log(obj.sum(),obj.mult());