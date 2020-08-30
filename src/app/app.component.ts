import { Component, OnInit } from '@angular/core';

import { LeaderboardService } from './services/leaderboard.service';
import { Leader } from './interfaces/leader.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Leaderboard App';
  leaders$: Observable<Array<Leader>>;

  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit(): void {
    this.getLeaders();
  }

  onIncrement(id: string): void {
    this.leaderboardService.increment(id);
  }

  onDecrement(id: string): void {
    this.leaderboardService.decrement(id);
  }

  getLeaders(): void {
    this.leaders$ = this.leaderboardService.getLeaders();
  }

}
