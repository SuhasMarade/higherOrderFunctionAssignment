let storeInventory = {shirt: 35, shoes: 30, belt: 15, pant: 40};
function priceConvertor(x){
   let b = Object.entries(x);
   b.map((ele) => {
    let c = ele;
    c[1] = c[1] * 80;
   })
   newObj = Object.fromEntries(b);
   return newObj;
}
let newPrice = priceConvertor(storeInventory);
console.log(newPrice);