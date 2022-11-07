import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Carrito } from '../model/carrito';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  private carrito:Carrito[]
  constructor(
    private carritoServ:CarritoService,
    private alertController: AlertController
    ) {
    this.carrito = this.carritoServ.getCarrito();
   }

   public async removeProduct(pos: number) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: '¿Estás seguro que deseas eliminar del carrito?',
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
            this.carrito = this.carritoServ.removeProduct(pos);
          }
        }
      ]
    });

    await alert.present();

  }

  ngOnInit() {
  }

}
