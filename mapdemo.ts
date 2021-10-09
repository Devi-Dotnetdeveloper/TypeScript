let map=new Map();
map.set(1,"Angular");
map.set(2,"reactjs");
map.set(3,"nodejs");
map.set(4,"expressjs");
console.log(map);
console.log(map.size);
console.log(map.get(1));
map.delete(4);
for(let key of map.keys()){
    console.log(key);
}
for(let values of map.values()){
    console.log(values);   

}
console.log(map.entries());