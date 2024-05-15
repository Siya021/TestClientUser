import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashComponent,
    UserDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
