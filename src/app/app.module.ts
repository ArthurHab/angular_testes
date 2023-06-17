import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/testing/first-component/first-component.component';
import { SecondComponentComponent } from './components/testing/second-component/second-component.component';
import { ThirdComponentComponent } from './components/testing/third-component/third-component.component';
import { FourthComponentComponent } from './components/testing/fourth-component/fourth-component.component';
import { FifthComponentComponent } from './components/testing/fifth-component/fifth-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    FourthComponentComponent,
    FifthComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
