import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Leader } from '../../interfaces/leader.interface';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {
  @Input() leader: Leader;
  @Output() increment: EventEmitter<string> = new EventEmitter();
  @Output() decrement: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement(): void {
    this.increment.emit(this.leader.id);
  }

  onDecrement(): void {
    this.decrement.emit(this.leader.id);
  }

}
