import { Component, OnInit } from '@angular/core';
import { CarsService,Car } from '../../services/cars.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent  implements OnInit {
  car:Car= {patente:"", year:0, imageUrl:"", nombre:"" }
  constructor(
    private carService:CarsService,
    private aService:AuthService,
    private router:Router
    ) { }

  ngOnInit() {}

  addCar(){
    this.carService.addCar(this.car).then(()=>{
      alert("Agregado correctamente!")
      this.car = {patente:"", year:0, imageUrl:"", nombre:"" }
    }).catch(error=>{alert("error al agregar "+error)})
  }

  logout(){
    this.aService.logout();
    alert("sesion cerrada")
    this.router.navigate(["/home"]);
  }
  
}
