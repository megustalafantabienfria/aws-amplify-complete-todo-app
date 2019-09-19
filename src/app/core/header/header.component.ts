import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { TodosService } from 'src/app/services/todos/todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  session: Observable<any> = this.auth.currentSession;

  constructor(
    private auth: AuthService,
    private todos: TodosService
  ) {}

  ngOnInit() {
    this.todos.test();
  }

  async signOut(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

}
