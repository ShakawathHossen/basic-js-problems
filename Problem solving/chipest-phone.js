const phones=[
    {name:"iphone", price:3333, color:"red"},
    {name:"samsung", price:2222, color:"blue"},
    {name:"nokia", price:1111, color:"green"},
    {name:"oppo", price:4444, color:"yellow"},
]

function chipestPhone(phones){
   let chepest=phones[0];
    for(var i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price<chepest.price){
            chepest=phone;
        }
    }
    return chepest;
}

const myPhone = chipestPhone(phones);
console.log(myPhone);