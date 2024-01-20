
export interface Order{
    userId:string,
    delStatus:string,
    products:[{product : string,
      quantity : number,
      price: number}],
    totalAmount:number,
    shippingAddress:{},
    date:Date,
}

