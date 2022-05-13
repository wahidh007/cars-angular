import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './car/header/header.component';
import { CarOverviewComponent } from './car/car-overview/car-overview.component';
import { CarAddComponent } from './car/car-overview/car-add/car-add.component';
import { CarListComponent } from './car/car-overview/car-list/car-list.component';
import { CarItemComponent } from './car/car-overview/car-item/car-item.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { FormsModule } from '@angular/forms';
import { AproposComponent } from './car/apropos/apropos.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './car/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarOverviewComponent,
    CarAddComponent,
    CarListComponent,
    CarItemComponent,
    CarDetailsComponent,
    AproposComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
