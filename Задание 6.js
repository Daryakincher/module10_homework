let arrFlowers=["rose", "peony","poppy"];
console.log(arrFlowers.lenght);
arrFlowers.forEach(element=> console.log(element));
let reult=true;
for(let i = 0; i < arrFlowers.length - 1; i++) {
    if (arrFlowers[i] !== arrFlowers[i + 1]) {
        result = false
    }
}
console.log(result)