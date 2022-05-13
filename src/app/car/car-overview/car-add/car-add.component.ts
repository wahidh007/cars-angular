import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  operation!: string;
  car!: Car;

  constructor(private carsService: CarsService, private _snackBar: MatSnackBar, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.car === undefined) {
      this.car = new Car("-1", '', '', new Date());
    } else {
      this.car = data.car;
    }
    // this.car = new Car(9, 'xxx', 'xxx', new Date());
    this.operation = data.operation;
  }

  ngOnInit(): void {
  }

  onSubmit(carForm: NgForm) {
    // console.log(this.data.car.prop + ' ' + this.data.car.marque); //-------------
    if (carForm.invalid) {
      return;
    }

    if (this.operation === 'Add') {
      let car = new Car("1", carForm.value.prop, carForm.value.marque, carForm.value.dateCirculation);
      this.carsService.addCar(car);
      // snackBar
      this._snackBar.open('Car added !', 'hide', {
        duration: 3000
      });
    } else {
      let car = new Car(this.car.id, carForm.value.prop, carForm.value.marque, carForm.value.dateCirculation);
      this.carsService.updateCar(car);
      // snackBar
      this._snackBar.open('Car updated !', 'hide', {
        duration: 3000
      });
    }

    carForm.resetForm();

  }

}
