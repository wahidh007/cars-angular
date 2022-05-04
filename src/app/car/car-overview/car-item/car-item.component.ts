import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  @Input()
  car!: Car;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
  }

  editCar(car:Car) {
    this.carsService.openDialog('Edit', car);
  }

  deleteCar(car: Car) {
    if (window.confirm('Voulez vous supprimer cette voiture ?')) {
      this.carsService.deleteCar(car);
    }
  }

}
