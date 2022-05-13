import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  isLoading = false;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    // this.cars = this.carsService.cars;
    this.isLoading = true;
    this.carsService.carsUpdates
      .subscribe((c: Car[]) =>
        {
          this.cars = c;
          this.dataSource = this.cars;
          this.isLoading = false;
        });
    this.carsService.getCars();
  }
//********* */
  // displayedColumns: string[] = ['id', 'prop', 'marque', 'dateCirculation'];
  displayedColumns: string[] = ['prop', 'marque', 'dateCirculation'];
  // dataSource = [...this.carsService.cars];
  // dataSource = this.carsService.cars;
  dataSource: Car[] = [];

  @ViewChild(MatTable) table!: MatTable<Car>;

  addData() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
    this.carsService.openDialog('Add');
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
