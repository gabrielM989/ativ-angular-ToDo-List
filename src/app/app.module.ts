import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { EstilizacaoGDirective } from './estilizacao-g.directive';
import { ToDoComponent } from './to-do/to-do.component';
import { Estilizacao2Directive } from './estilizacao2.directive';


@NgModule({
  declarations: [
    AppComponent,
    EstilizacaoGDirective,
    ToDoComponent,
    Estilizacao2Directive
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
