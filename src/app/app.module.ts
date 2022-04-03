import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { FronttopComponent } from './fronttop/fronttop.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './fronttop/login/login.component';
import { RegisterComponent } from './fronttop/register/register.component';
import {MatInputModule} from '@angular/material/input';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { AdditemsComponent } from './additems/additems.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListComponent,
    FronttopComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    Test1Component,
    AdditemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,

    MatDialogModule,
    MatTableModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
