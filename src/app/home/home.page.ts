import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CarritoService } from '../carrito.service';
import { Carrito } from '../model/carrito';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products : Producto[];
  public product : Producto;
  public carrito : Carrito[]


  constructor(
    private alertController: AlertController,
    private productService:ProductoService,
    private router:Router,
    private carritoService:CarritoService,
    private firestore: AngularFirestore,
    private aroute: ActivatedRoute
    ) {
      this.productService.getProductos().subscribe(res => {
        this.products = res;
        console.log(this.products)
      })
      //
      //this.products = this.productService.getProducts();
    }

    public getProductByID(id: string) {
      this.router.navigate(['/producto'], {
        queryParams: {
          id: id
        }
      })
      this.productService.getProductByID(id);
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
              this.productService.removeProduct(id);
            }
          }
        ]
      });
      await alert.present();
    }

    //------------------------------------------
    
  public addCarrito(prod:Producto, id:string){
    this.productService.con=1
    let c = {
      producto:prod
    }
    this.carritoService.addCarrito(c);

    //
    this.router.navigate(['/carrito'], {
      queryParams: {
        id: id
      }
    })
    this.productService.getProductByID(id);
  }

  public goToCarrito(): void {
    this.productService.con=0
    this.router.navigate(['/carrito']);
  }
 
}
