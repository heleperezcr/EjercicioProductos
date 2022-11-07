import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Carrito } from '../model/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  private carrito:Carrito[]
  constructor(private carritoServ:CarritoService) {
    this.carrito = this.carritoServ.getCarrito();
   }

  ngOnInit() {
  }

}
