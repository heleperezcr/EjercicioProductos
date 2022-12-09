import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CarritoService } from '../carrito.service';
import { Carrito } from '../model/carrito';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products : Producto[];
  public carrito : Carrito[]


  constructor(
    private alertcntroller: AlertController,
    private productService:ProductoService,
    private router:Router,
    private carritoService:CarritoService
    ) {
      this.productService.getProductos().subscribe(res => {
        this.products = res;
        console.log(this.products)
      })
      //
      //this.products = this.productService.getProducts();
    }














    //------------------------------------------

    public getProductById(id:string):void{
      this.router.navigate(['/producto'],{
        queryParams:{id:id}
      });
    }

    
  public addCarrito(prod:Producto){
    let c = {
      producto:prod
    }
    this.carritoService.addCarrito(c);
  }

}
