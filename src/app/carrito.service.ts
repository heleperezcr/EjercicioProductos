import { Injectable } from '@angular/core';
import { Carrito } from './model/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: Carrito[];

  constructor(

  ) { 
    this.carrito=[]
  }

  public getCarrito():Carrito[]{
    return this.carrito
  }

 /* public getCarritoById(id:number):Carrito{
    let item: Carrito;
     item = this.carrito.find(
      (prodCarrito)=>{
    return prodCarrito.id==id;
    });
    return item;
  }*/

  public addCarrito(prodCarrito:Carrito){
    this.carrito.push(prodCarrito);
  }

  public removeProduct(pos: number): Carrito[]{
    this.carrito.splice(pos, 1);
    return this.carrito;
  }


}
