let weakmap=new WeakMap();
weakmap.set({name:"john"},"Hello, How are you?");
weakmap.set({name:"Peter"},"Hello, I am fine.");            

weakmap.set({name:"john"},"Hello, How are you?");

console.log(weakmap);
