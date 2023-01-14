import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomemadeComponent } from './homemade/homemade.component';
import { NavComponent } from './nav/nav.component';
import { QccComponent } from './qcc/qcc.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomemadeComponent,
    NavComponent,
    QccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
