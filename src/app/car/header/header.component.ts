import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth!: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthUpdated.subscribe((val) => {
      this.isAuth = val;
      console.log(this.isAuth);
    });
  }

  onLogOut(){
    this.authService.signOut();
  }
}
