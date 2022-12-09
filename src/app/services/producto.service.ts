import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private products: Producto[];

  constructor(private firestore: AngularFirestore) { 
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
        price: 18,
        photo:'https://picsum.photos/100/?random=2'
      },
      {
        id: 3,
        name: "Fabuloso",
        price: 27,
        photo:'https://picsum.photos/100/?random=3'
      },
      {
        id: 4,
        name: "Pinol",
        price: 32,
        photo:'https://picsum.photos/100/?random=4'
      }
    ]

  }
 
  public getProductos(): Observable<Producto[]> {
    return this.firestore.collection('productos').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      })
    )
  }

  public newProduct(student: Producto){
    this.firestore.collection('productos').add(student)
  }










  public getProducts():Producto[]{
    return this.products
  }

  public getProductById(id:number):Producto{
    let item: Producto;
     item = this.products.find(
      (product)=>{
    return product.id==id;
    });
    return item;
  }

  public addProduct(product:Producto){
    this.products.push(product);
  }

}
