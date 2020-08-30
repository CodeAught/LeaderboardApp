import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LeaderBoardModule } from './leader-board/leader-board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LeaderBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
