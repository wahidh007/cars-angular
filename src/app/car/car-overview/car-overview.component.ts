import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-overview',
  templateUrl: './car-overview.component.html',
  styleUrls: ['./car-overview.component.css']
})
export class CarOverviewComponent implements OnInit {

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
  }

  openAddDialog() {
    this.carService.openDialog('Add');
  }

  carNumber() : number {
    return this.carService.cars.length;
  }

}
