import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { CategoryService } from './services/categoryService/category-service';
import { UserService } from './services/userService/user.service';
import { PortalComponent } from './components/portal/portal.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'portal', component: PortalComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SelectCategoryComponent,
    RegistrationComponent,
    PortalComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [CategoryService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
