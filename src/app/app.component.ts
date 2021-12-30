import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rioja Castillo Ygay Gran';
  contador : number = 1;
  precio : number = 11.25;
  
 sumar(){
  this.contador += 1
  this.precio = this.precio + 11.25;
 }    
  restar(){
    this.contador -= 1
    this.precio = this.precio - 11.25
   
  }
 
}

