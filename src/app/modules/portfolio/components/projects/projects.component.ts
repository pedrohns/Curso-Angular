import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Calorie tracker',
      title: 'Calorie Tracker',
      width: '100px',
      height: '100px',
      description: 'Explore o fascinante mundo de Flutter.',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://github.com/pedrohns',
        },
      ],
    },
  ]);
  openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data: data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
