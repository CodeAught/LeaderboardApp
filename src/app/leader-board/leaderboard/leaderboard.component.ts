import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Leader } from 'src/app/interfaces/leader.interface';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  @Input() leaders: Array<Leader>;
  @Output() increment: EventEmitter<string> = new EventEmitter();
  @Output() decrement: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement(id: string) {
    this.increment.emit(id);
  }

  onDecrement(id: string) {
    this.decrement.emit(id);
  }

}
