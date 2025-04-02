import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnChanges {

  @Input() bookDescription: string;

  previewText : string;

  constructor(public dialog: MatDialog) { }

  // ngOnInit(): void {
  //   console.log( "preview rec -> " + this.bookDescription)
  //   if(this.bookDescription){

  //     this.previewText = this.bookDescription;
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log( "preview rec -> " + this.bookDescription)
    if(this.bookDescription){

      this.previewText = this.bookDescription;
    }
  }

    openPreviewDialog(): void {
    this.dialog.open(BookPreviewDialogComponent, {
      width: '400px',
      data: { description: this.bookDescription }
    });
  }

}
@Component({
  selector: 'app-book-preview-dialog',
  template: `
    <h2 mat-dialog-title>Chapter 1 & 2</h2>
    <mat-dialog-content class="scrollable-content">
      <p>{{ data.description }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Close</button>
    </mat-dialog-actions>
  `,
  styles: [
      `
        .scrollable-content {
          max-height: 300px; /* Set max height */
          overflow-y: auto; /* Enable vertical scrolling */
          padding: 10px;
        }
        mat-dialog-title {
          font-size: 20px;
          font-weight: bold;
        }
        mat-dialog-actions {
          padding-top: 10px;
          text-align: center;
        }
      `
    ]
})
export class BookPreviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BookPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { description: string }
  ) {}
}
