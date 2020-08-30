import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AddLeaderComponent } from './add-leader/add-leader.component';


@NgModule({
  declarations: [LeaderboardComponent, AddLeaderComponent],
  imports: [
    MaterialModule
  ],
  exports: [
    LeaderboardComponent,
    AddLeaderComponent
  ]
})
export class LeaderBoardModule { }
