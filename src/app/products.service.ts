import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {prod:"laptop", id:1, name:"samsung", price:500, img:'https://static.toiimg.com/photo/64550606/Samsung-Notebook-9-Pro-NP940X3M-K02HK-Laptop-Core-i7-7th-Gen8-GB256-GB-SSDWindows-10.jpg'},
    {prod:"laptop", id:2, name:"toshiba", price:400, img:'https://5.imimg.com/data5/NK/WY/MY-33199570/toshiba-laptop-500x500.jpg'},
    {prod:"laptop", id:3, name:"Lenovo", price:350, img:'https://pcshop.ge/wp-content/uploads/2020/10/I21011-300x300.jpg'},

    {prod:"phone", id:4, name:"Iphone", price:130, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cy2WulOALmhKbOGDDkDgJvj3jHor23lL5w&usqp=CAU"},
    {prod:"phone", id:5, name:"Xiaomi", price:320, img:"https://i01.appmifile.com/webfile/globalimg/zhouyuxin/J15S-Green-800.png"},
    {prod:"phone", id:6, name:"Lenovo", price:150, img:"https://static.digit.in/default/thumb_123487_default_td_300.jpeg?tr=w-1200"},

    {prod:"headphone", id:7, name:"CyberTls", price:1050, img:'https://dynamic.zacdn.com/006d2MCBlNpBEiYTXGHsUF0Osyk=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.my.zalora.net/p/razer-0566-8910512-1.jpg'},
    {prod:"headphone", id:8, name:"Predator", price:1500, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSof_XWx0Qpz2L1Nr0gqMCyqSk7Y0ESOEYPuA&usqp=CAU'},
    {prod:"headphone", id:9, name:"Yleoba", price:10, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfIA03-i3mIpNElrXOimK_if7j8yH9O4XLA&usqp=CAU'}
  ]

  getAll(): any{
    return this.products;
  }

  data:any;

  getByName(prodName:any): any{
    this.data = [];
    for (let i = 0; i < this.products.length; i++) {
      if (prodName == this.products[i]['prod']) {
        var tmp = this.products[i];
        this.data.push(tmp);
      }
    }
    return this.data;
  }
  getID(id:any): any{
    for (let i = 0; i < this.products.length; i++) {
      if (id == this.products[i]['id']) {
        return this.products[i];
      }
    }
  }
  constructor() { }
}
