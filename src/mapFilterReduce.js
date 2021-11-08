let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:1, productName:"Bardak", quantity:2, unitPrice:30},
    {id:1, productName:"Kalem", quantity:1, unitPrice:20},
    {id:1, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:1, productName:"Kitap", quantity:3, unitPrice:30},
    {id:1, productName:"pot", quantity:5, unitPrice:150},
]

console.log("<ul>")
// iterasyon yapiyor, arrayi tek tek dolaşmaya yarıyor.
cart.map(product => {
    console.log("<li>"+product.productName + " : " + 
    product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

//reduce
let total = cart.reduce((acc,product)=> acc+product.unitPrice*product.quantity,0)
console.log(total)


// filter func -predicate: tahmin
let quantityOver2 = cart.filter(product=> product.quantity>2)
console.log(quantityOver2)




function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)
console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)
