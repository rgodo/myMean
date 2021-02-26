import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MyCompComponent} from './mycomp.component';

import {MySecond} from './mysecond.component';
import { RgcomponentComponent } from './rgcomponent/rgcomponent.component';
import { MyBindingsComponent } from './my-bindings/my-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    MySecond,
    RgcomponentComponent,
    MyBindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
