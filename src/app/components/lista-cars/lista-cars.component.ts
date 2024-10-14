import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from '../../services/cars.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista-cars',
  templateUrl: './lista-cars.component.html',
  styleUrls: ['./lista-cars.component.scss'],
})
export class ListaCarsComponent  implements OnInit {
  cars:Car[]=[]
  constructor(private carsService:CarsService) { }

  ngOnInit() {
    this.carsService.getCar().subscribe(cars =>{
      this.cars=cars;
    })
  }

}
