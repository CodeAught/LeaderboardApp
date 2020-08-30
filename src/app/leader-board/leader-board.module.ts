import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AddLeaderComponent } from './add-leader/add-leader.component';
import { LeaderComponent } from './leader/leader.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LeaderboardComponent, AddLeaderComponent, LeaderComponent],
  imports: [
    FormsModule,
    MaterialModule
  ],
  exports: [
    LeaderboardComponent,
    AddLeaderComponent
  ]
})
export class LeaderBoardModule { }
