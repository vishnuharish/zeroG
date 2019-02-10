import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { EventsComponent } from 'src/app/events/events.component';
import { RegistrationComponent } from 'src/app/registration/registration.component';

const routes: Routes = [
  {path: '', component:HomeComponent, data: {animation: 'HomePage'} },
  {path: 'events', component:EventsComponent, data: {animation: 'FilterPage'}},
  {path: 'register', component:RegistrationComponent, data: {animation: 'AboutPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
