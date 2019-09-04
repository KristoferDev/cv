import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'Zone.js';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LanguageComponent } from './components/language/language.component';

const appRoutes: Routes = [
  { path: 'Home', component: ProfileComponent },
  { path: 'Knowledge', component: LanguageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
