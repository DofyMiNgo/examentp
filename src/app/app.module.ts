import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ColorPickerModule } from 'ngx-color-picker';
import { LogoutComponent } from './logout/logout.component';
import { PixelGridComponent } from './pixel-grid/pixel-grid.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    PixelGridComponent,
    ColorPaletteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
