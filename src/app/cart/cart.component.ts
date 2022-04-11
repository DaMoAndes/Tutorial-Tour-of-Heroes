import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  public listMuseums: any = []
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cargarData();

  }
  public cargarData() {
    this.cartService.getMuseums('https://back-museo-uniands.herokuapp.com/api/museums')
      .subscribe(respuesta => {
        /*  for (let index = 0; index < Object(respuesta).length; index++) {
        console.log(Object(respuesta)[index]['name']); */
        this.listMuseums = respuesta;
      });
  }

}
