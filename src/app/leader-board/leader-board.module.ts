import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';


@NgModule({
  declarations: [LeaderboardComponent],
  imports: [
    MaterialModule
  ]
})
export class LeaderBoardModule { }
