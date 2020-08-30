import { Injectable } from '@angular/core';

import { ILeaderboardService } from '../interfaces/leaderboard-service.interface'
import { Leader } from '../interfaces/leader.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService implements ILeaderboardService {
  private readonly maxLimit = 1000;

  private list: Array<Leader> = [
    {
      id: '111',
      name: 'Leader 1',
      points: 72
    },
    {
      id: '114',
      name: 'Leader 3',
      points: 50
    },
    {
      id: '112',
      name: 'Leader 2',
      points: 29
    },
    {
      id: '113',
      name: 'Leader 4',
      points: 18
    },
    {
      id: '115',
      name: 'Leader 5',
      points: 10
    }
  ];

  private leaders$: BehaviorSubject<Array<Leader>> = new BehaviorSubject(this.list);

  constructor() {
    this.sortLeaders();
  }

  getLeaders(): Observable<Array<Leader>> {
    return this.leaders$.asObservable();
  }

  generateId(): string {
    return Math.floor(this.maxLimit * Math.random()).toString();
  }

  insert(name: string): void {
    const leader = {
      id: this.generateId(),
      name: name,
      points: 0
    };

    this.list.push(leader);
    this.publishUpdatedList();
  }

  getList(): Array<Leader> {
    return [...this.list];
  }

  increment(id: string): void {
    const index = this.findLeaderIndex(id);
    if(index >= 0) {
      this.list[index].points = ++this.list[index].points;
      this.sortLeaders();
    }
  }

  decrement(id: string): void {
    const index = this.findLeaderIndex(id);
    if(index >= 0) {
      this.list[index].points = --this.list[index].points;
      this.sortLeaders();
    }
  }

  findLeaderIndex(id: string): number {
    return this.list?.findIndex(leader => leader.id === id);
  }

  sortLeaders() {
    this.list?.sort((leader1, leader2) => {
      return leader2.points - leader1.points;
    });

    this.publishUpdatedList();
  }

  publishUpdatedList() {
    this.leaders$.next(this.list);
  }
}
