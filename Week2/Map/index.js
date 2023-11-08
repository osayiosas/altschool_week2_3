
//using the create the class sytax  

let userMap = new Map();

//add object to the map

userMap.set(1, "An integer key")
userMap.set(true, "A boolean value")

let mary = {name: "Mary", age:20}

userMap.set(mary, "An integer key")

//console.log(userMap)

//Display key and value

//console.log(userMap.keys())


//console.log(userMap.values())


//Display entries

// console.log(userMap.entries())

//Display size 

// console.log(userMap.size)

// check if a key exists 

console.log(userMap.has(mary))

//convert array to object 

let mapObj = Object.fromEntries(userMap)
console.log(mapObj)
