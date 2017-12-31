import { Injectable } from '@angular/core';

import { Customer } from '../models/Customer';

@Injectable()
export class CustomerService {

  customers:Array<Customer> = new Array<Customer>();

  constructor() { }

  seedCustomers() {
console.log('seedCustomers')
    this.customers = [
      { 
        id: 1,
        firstName: "Tom", 
        lastName: "Selleck", 
        orders: [
                  {
                    id:401,
                    orderDate: new Date(),
                    lineItems: [ 
                      { 
                        id:1,
                        productNumber:"1546376232",
                        productDescription:"ng-book: The Complete Guide to Angular 4",
                        quantity:2,
                        itemCost:54.91,
                        totalCost:109.82
                      },
                      { 
                        id:2,
                        productNumber:"1617293121",
                        productDescription:"Angular 2 Development with TypeScript",
                        quantity:1,
                        itemCost:22.99,
                        totalCost:45.98
                      } 
                    ],
                    totalCost:155.80,
                    tax:15.58,
                    discount:5.00,
                    orderTotal:166.38
                  },
                  {
                    id:402,
                    orderDate: new Date(),
                    lineItems: [ 
                      { 
                        id:1,
                        productNumber:"B00LDZ7824",
                        productDescription:"Learn JavaScript VISUALLY",
                        quantity:1,
                        itemCost:31.00,
                        totalCost:31.00
                      },
                      { 
                        id:2,
                        productNumber:"B017Y9MBI8",
                        productDescription:"Code Breakers Complete Series",
                        quantity:1,
                        itemCost:83.32,
                        totalCost:83.32
                      } 
                    ],
                    totalCost:114.32,
                    tax:11.43,
                    discount:0.00,
                    orderTotal:125.75
                  }
                ] 
        },
        { 
          id: 2,
          firstName: "Sally", 
          lastName: "Struthers", 
          orders: [
                    {
                      id:301,
                      orderDate: new Date(),
                      lineItems: [ 
                        { 
                          id:1,
                          productNumber:"1430267917",
                          productDescription:"Pro TypeScript: Application-Scale JavaScript Development",
                          quantity:2,
                          itemCost:29.22,
                          totalCost:58.44
                        } 
                      ],
                      totalCost:58.44,
                      tax:5.84,
                      discount:0.00,
                      orderTotal:64.28
                    }
                  ] 
          },
          { 
            id: 3,
            firstName: "Mark", 
            lastName: "Twain", 
            orders: [
                      {
                        id:101,
                        orderDate: new Date(),
                        lineItems: [ 
                          { 
                            id:1,
                            productNumber:"1491904224",
                            productDescription:"You Don't Know JS: Async & Performance",
                            quantity:1,
                            itemCost:13.67,
                            totalCost:13.67
                          } 
                        ],
                        totalCost:13.67,
                        tax:1.37,
                        discount:0.00,
                        orderTotal:15.04
                      },
                      {
                        id:102,
                        orderDate: new Date(),
                        lineItems: [ 
                          { 
                            id:1,
                            productNumber:"1491904194",
                            productDescription:"You Don't Know JS: Types & Grammar",
                            quantity:1,
                            itemCost:11.92,
                            totalCost:11.92
                          } 
                        ],
                        totalCost:11.92,
                        tax:1.19,
                        discount:0.00,
                        orderTotal:13.11
                      }
                    ] 
            }
    ];
    
    localStorage.setItem('customers', JSON.stringify(this.customers));

  }

  getCustomers(): Customer[] 
  {
console.log('getCustomers')
    if (localStorage.getItem('customers') === null) { this.customers = []; }
    else { this.customers = JSON.parse(localStorage.getItem('customers')); }
    return this.customers;
  }

  getCustomer(id:number): Customer
  {
console.log('getCustomer')
    for(let i = 0; i < this.customers.length; i++)
    {
      if(this.customers[i].id == id) { 
        return this.customers[i]; 
      }
    };
    return null;
  }

  addCustomer(customer:Customer){

console.log('addCustomer')

    let customers;
  
    if(localStorage.getItem('customers') === null) { customers = []; }
    else { customers = JSON.parse(localStorage.getItem('customers')); }

    customer.id = this.getMaxCustomerID(customers);

    customers.unshift(customer);

    localStorage.setItem('customers', JSON.stringify(customers));
  }

  getMaxCustomerID(customers:Customer[]): number
  {
console.log('getMaxCustomerID')
    let nextId = 0;

    for(let i = 0; i < customers.length; i++) 
    {
      if(customers[i].id >= nextId) {
        nextId = customers[i].id + 1;
      }
    }
    return nextId;
  }

  removeCustomer(id:number) {

    console.log('removeCustomer')

    let customers = JSON.parse(localStorage.getItem('customers'));

    for(let i = 0; i < customers.length; i++)
    {
      if(customers[i].id === id) 
      {
        customers.splice(i, 1);
        localStorage.setItem('customers', JSON.stringify(customers));
      }
    };
  }

}
