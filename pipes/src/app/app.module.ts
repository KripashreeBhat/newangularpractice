import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PipesComponent } from './pipes/pipes.component';

import { PipePipe } from './pipe.pipe';
import { AgePipe } from './age.pipe';
import { DetailPipe } from './detail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // PipesComponent,
    PipePipe,
    AgePipe,
    DetailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
