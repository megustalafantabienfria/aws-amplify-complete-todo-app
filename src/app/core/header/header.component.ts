import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {



  constructor(
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.currentAuthenticatedUser.subscribe(
      success => console.log(success),
      error => console.log(error)
    );
  }

}
