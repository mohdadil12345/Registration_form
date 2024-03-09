import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: "", component : HomepageComponent},
  {path : "signup", component: SignupPageComponent},
  {path : "login", component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
