import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ConfirmatedGuard } from './guards/confirmated/confirmated.guard';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    canActivate: [ConfirmatedGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ConfirmatedGuard]
})
export class AppRoutingModule { }
