import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Carrito } from '../model/carrito';
import { AlertController } from "@ionic/angular";
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Producto } from '../model/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit { 
  public product: Producto;
  public producto: Producto;
  public products: Producto[];
  private carrito:Carrito[]
  constructor(
    private carritoServ:CarritoService,
    private alertController: AlertController,
    private productService:ProductoService,
    private firestore: AngularFirestore,
    private aroute: ActivatedRoute
    ) {
      this.productService.getCarrito().subscribe(res => {
        this.products = res;
        console.log(this.products)
      })
   }
 
   public async removeProduct(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: '¿Estás seguro que deseas eliminar?',
      message: 'Esto es una confirmación',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            this.productService.removeCarrito(id);
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.agregarCarrito()
    //
  }

  public agregarCarrito(){
    if(this.productService.con=1){
      this.aroute.queryParams.subscribe((params) => {
        this.productService.getProductByID(params.id).subscribe(item => {
          this.product = item as Producto;
          console.log(this.product);
          this.producto = {
            ids:this.product.ids,
            photo:this.product.photo, 
            name:this.product.name,
            price:this.product.price,
          } 
          this.productService.newCarrito(this.product);
        });
        
      });
    }else if(this.productService.con=0){console.log("nada");}
  }
  

}
