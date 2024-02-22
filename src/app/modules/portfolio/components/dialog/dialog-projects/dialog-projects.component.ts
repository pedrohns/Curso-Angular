import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.interface';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss',
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    // esse cara serve para fechar a modal
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    // aqui que é pego os dado que vem de dialog
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ) {}
  getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }
  closeModal() {
    return this._dialogRef.close();
  }
}
