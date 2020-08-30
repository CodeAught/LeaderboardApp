import { Leader } from './leader.interface';

export interface LeaderboardService {
  list: Array<Leader>;
  insert(name: string): void;
  getList(): Array<Leader>;
  increment(id: string): void;
  decrement(id: string): void;
}
