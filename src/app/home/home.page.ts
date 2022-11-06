import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products : Producto[]

  constructor(
    private alertcntroller: AlertController,
    private productService:ProductoService,
    private router:Router
    ) {
      this.products = this.productService.getProducts();
    }

    public getProductById(id:string):void{
      this.router.navigate(['producto'],{
        queryParams:{id:id},
      });
    }

}
