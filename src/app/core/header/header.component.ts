import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/API/API.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  session: Observable<any> = this.auth.currentSession;

  constructor(
    private auth: AuthService,
    private API: APIService
  ) {}

  ngOnInit() {
    this.API.ListTodos().then(console.log);
    this.API.CreateUser({ id: 'aber', email: 'aver' }).then(console.log).catch(console.log);
  }

  async signOut(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

}
