const csv = `NAME,CATEGORY,PRICE
Xiaomi Redmi 5A,Smartphone,1199000
Macbook Air,Laptop,13775000
Samsung Galaxy J7,Smartphone,3549000
DELL XPS 13,Laptop,26799000
Xiaomi Mi 6,Smartphone,5399000
LG V30 Plus,Smartphone,10499000`;
var result = [];

const csvToJson = csv => {
    var lines=csv.split("\n");

    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    };
    result.sort(function(a,b){
        return a.PRICE.localeCompare(b.PRICE);
    }) 
}
csvToJson(csv)
result =result.sort(function(a,b){
    return a.PRICE.localeCompare(b.PRICE);
});
console.log(JSON.stringify(result));