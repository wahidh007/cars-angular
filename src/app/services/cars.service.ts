import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CarAddComponent } from '../car/car-overview/car-add/car-add.component';
import { Car } from '../models/car.model';

@Injectable({ providedIn: 'root' })
export class CarsService {
  cars: Car[] = [
    new Car("1", 'Salah', 'Volvo', new Date('01/03/1999')),
    new Car("2", 'Amar', 'Ferari', new Date('12/26/2009')),
    new Car("3", 'Fatma', 'Passat', new Date('06/15/2018')),
  ];

  carsUpdates = new Subject<Car[]>();
  carsApiUrl = 'http://localhost:3000/api/cars/';

  constructor(public dialog: MatDialog, private http: HttpClient) {}

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

  getCars() {
    // this.carsUpdates.next([...this.cars]);
    // return this.cars;

    this.http.get<Car[]>(this.carsApiUrl)
      .subscribe((cars) => {
        this.cars = cars;
        this.carsUpdates.next([...this.cars]);
      })
  }

  getCarById(id: string) {
    return this.cars.find((c) => c.id === id);
  }

  addCar(c: Car) {
    // this.cars.push(c);
    // this.carsUpdates.next([...this.cars]);

    this.http.post<Car[]>(this.carsApiUrl, c)
      .subscribe((cars) => {
        this.cars = cars;
        this.carsUpdates.next([...this.cars]);
      })

  }

  updateCar(c: Car) {
    // let car = this.cars.find((e) => e.id === c.id);

    // car!.marque = c.marque;
    // car!.dateCirulation = c.dateCirulation;
    // car!.prop = c.prop;

    // this.carsUpdates.next([...this.cars]);

    this.http.put<Car[]>(this.carsApiUrl + c.id, c)
      .subscribe((cars) => {
          this.cars = cars;
          this.carsUpdates.next([...this.cars]);
      });
  }

  deleteCar(c: Car) {
    // const index = this.cars.indexOf(c);
    // this.cars.splice(index, 1);

    // this.carsUpdates.next([...this.cars]);

    this.http.delete<Car[]>(this.carsApiUrl + c.id)
      .subscribe((cars) => {
        this.cars = cars;
        this.carsUpdates.next([...this.cars]);
      })
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
