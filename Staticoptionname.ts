class employee{
    private _empno:number;
    private _empname:string;
    private _sal:number;
    constructor(){        
    }
    //property declaration
    public set eno(empno:number){        
        this._empno=empno;
    }
    public get eno():number{
        return this._empno;
    }
    public set ename(empname:string){
        
        this._empname=empname;        
    }
    public get ename():string{
        return this._empname;
    }
    public set sal(sal1:number){
        this._sal=sal1;      
    }
    public get sal():number{
        return this._sal;
    }
    display(){
        console.log(this._empname,this._empno,this._sal);
    }
}
let eobj=new employee();
eobj.eno=1;
eobj.ename="John";
eobj.sal=20000;
eobj.display();
eobj.eno=2;
eobj.ename="Peter";
eobj.sal=eobj.sal+5000;
eobj.display();
