conn = new Mongo();
db = conn.getDB("search");
var cur = db.products.find()

var obj;

while(cur.hasNext()){
    obj = cur.next();
    print(`"${obj.name}"|"${obj.price}"|"${obj.category}"|"${obj.gender}"|"${obj.image}"|"${obj.rating}"|"${obj.numRatings}"|{"${obj.colors}"}|{"${obj.activities}"}|{"${obj.materials}"}`)
}
