import { Injectable } from '@angular/core';

import { ILeaderboardService } from '../interfaces/leaderboard-service.interface'
import { Leader } from '../interfaces/leader.interface';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService implements ILeaderboardService {
  list: Array<Leader>

  constructor() { }

  insert(name: string): void {

  }

  getList(): Array<Leader> {
    return;
  }

  increment(id: string): void {

  }

  decrement(id: string): void {

  }
}
