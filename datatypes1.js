var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var c = color.green;
var cname = color[2];
console.log("Enum type");
console.log(c, cname);
console.log("Any type");
var a;
a = 100;
console.log(a);
a = "Test";
console.log(a);
