class employee{
    private _empno:number;
    private _sal:number;
    private _da:number;
    constructor(empno:number){
        this._empno=empno;
    }
    //property declaration
    public set sal(sal1:number){
        this._sal=sal1;
        this._da=sal1*0.4;
    }
    public get sal():number{
        return this._sal;
    }
    display(){
        console.log(this._empno,this._sal,this._da);
    }
}
let eobj=new employee(100);
eobj.sal=10000;
eobj.display();
eobj.sal=eobj.sal+5000;
eobj.display();