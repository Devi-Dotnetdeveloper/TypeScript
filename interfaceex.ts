interface idraw{
    area():number;
}
class circle implements idraw{
    constructor(private radius:number){

    }
    area():number{
        let res=3.14*this.radius*this.radius;
        return res;
    }
}
class rect implements idraw{
    constructor(private l:number,private b:number){

    }
    area():number{
        let res=this.l*this.b;
        return res;
    }
}
//Normal approach
console.log("Normal Approach");
let obj1=new circle(5);
console.log("area of circle:"+obj1.area());
let obj2=new rect(6,7);
console.log("area of rect:"+obj2.area());
console.log("**************");
//Polymorphism
console.log("Polymorphism");
let draw:idraw;
draw=new circle(5);
console.log("area of circle:"+draw.area());
draw=new rect(6,7);
console.log("area of rect:"+draw.area());
