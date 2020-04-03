import { AuthService } from './../../core/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  autenticar() {
    this.authService.autenticar(null).subscribe(v => console.log(v));
  }
}
