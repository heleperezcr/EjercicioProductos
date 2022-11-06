import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private products: Producto[];

  constructor() { 
    this.products = [
      {
        id: 1,
        name: "Jabon",
        price: 20,
        photo:'https://picsum.photos/100/?random=1'
      },
      {
        id: 2,
        name: "Cloro",
        price: 20,
        photo:'https://picsum.photos/100/?random=2'
      },
      {
        id: 3,
        name: "Fabuloso",
        price: 20,
        photo:'https://picsum.photos/100/?random=3'
      },
      {
        id: 4,
        name: "Pinol",
        price: 20,
        photo:'https://picsum.photos/100/?random=4'
      }
    ]

  }

  public getProducts():Producto[]{
    return this.products
  }

  public getProductById(id:number):Producto{
    let item: Producto;
     item = this.products.find(
      (product)=>{
    return product.id===id;
    });
    return item;
  }

}
