var cities:string[]=["hyderabad","banglore","noida","chennai"];
var[city1,city2]=cities;
var[city1,,city3]=cities;
var[city1,...others]=cities;
console.log(city1,city2);
console.log(city1,city3);
console.log(city1,others);