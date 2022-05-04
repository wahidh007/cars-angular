import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CarAddComponent } from '../car/car-overview/car-add/car-add.component';
import { Car } from '../models/car.model';

@Injectable({ providedIn: 'root' })
export class CarsService {
  cars: Car[] = [
    new Car(1, 'Salah', 'Volvo', new Date('01/03/1999')),
    new Car(2, 'Amar', 'Ferari', new Date('12/26/2009')),
    new Car(3, 'Fatma', 'Passat', new Date('06/15/2018')),
  ];

  carsUpdates = new Subject<Car[]>();

  constructor(public dialog: MatDialog) {}

  openDialog(operation: string, c?: Car) {
    this.dialog.open(CarAddComponent, {
        width: '500px',
        height: '400px',
        data: {
          operation: operation,
          car: c
      }
    });
  }

  getCars(): Car[] {
    this.carsUpdates.next([...this.cars]);
    return this.cars;
  }

  getCarById(id: number) {
    return this.cars.find((c) => c.id === id);
  }

  addCar(c: Car) {
    this.cars.push(c);
    this.carsUpdates.next([...this.cars]);
  }

  updateCar(c: Car) {
    let car = this.cars.find((e) => e.id === c.id);

    car!.marque = c.marque;
    car!.dateCirulation = c.dateCirulation;
    car!.prop = c.prop;

    this.carsUpdates.next([...this.cars]);
  }

  deleteCar(c: Car) {
    const index = this.cars.indexOf(c);
    this.cars.splice(index, 1);

    this.carsUpdates.next([...this.cars]);
  }

  // openAddCarDialog() {
  //   this.dialog.open(CarAddComponent, {
  //     width: '500px',
  //     height: '400px',
  //     data: {
  //       car: new Car(5, 'eee', 'eee', new Date()),
  //     },
  //   });
  // }
}
