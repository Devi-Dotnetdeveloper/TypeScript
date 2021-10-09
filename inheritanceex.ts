class person{
    constructor(private name:string,private age:number){

    }
    display(){
        console.log("Name:"+this.name+" age:"+this.age);
    }
}

class customer extends person{
    private custid:string;
    constructor(name:string,age:number,custid:string){
        super(name,age);
        this.custid=custid;
    }
    display(){
        console.log("Custid:"+this.custid);
        super.display();
    }
}
let cobj=new customer("john",50,"C001");
cobj.display();