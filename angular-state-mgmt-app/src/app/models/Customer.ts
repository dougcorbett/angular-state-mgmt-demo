export class Customer{
    id:number;
    firstName:string;
    lastName:string;
    orders: Array<Order>;
}

export class Order {
    id:number;
    orderDate:Date;
    lineItems: Array<LineItem>;
    totalCost:number;
    tax:number;
    discount:number;
    orderTotal:number;
}

export class LineItem {
    id:number;
    productNumber:string;
    productDescription:string;
    quantity:number;
    itemCost:number;
    totalCost:number;
}