import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-leader',
  templateUrl: './add-leader.component.html',
  styleUrls: ['./add-leader.component.css']
})
export class AddLeaderComponent implements OnInit {
  @Output() addLeader: EventEmitter<string> = new EventEmitter();
  name: string;

  private dialogRef: MatDialogRef<any>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onAddLeader(modal: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(modal);
    this.dialogRef.afterClosed().subscribe(name => {
      name = name?.trim();
      if(name) {
        this.addLeader.emit(name);
        this.openSnackBar();
        this.name = '';
      }
    });
  }

  openSnackBar() {
    const config = {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    };
    this.snackbar.open('Added to leaderboard', 'X', config);
  }

  close() {
    this.dialogRef.close(this.name);
  }

}
