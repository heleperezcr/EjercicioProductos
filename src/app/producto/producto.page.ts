import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  public product: Producto;

  constructor(
    private productService:ProductoService,
    private aroute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(
      (params)=>{
        console.log(params);
      }
    );
    this.product = this.productService.getProductById(2);
//params.controlnumber
  }

}
