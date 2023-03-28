import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent implements OnInit {
  triggerAnimation = false;
  skills = {
    frontend: [
      {
        label: 'Angular',
        rating: '90%',
      },
      {
        label: 'React',
        rating: '50%',
      },
      {
        label: 'JavaScript',
        rating: '80%',
      },
      {
        label: 'TypeScript',
        rating: '90%',
      },
      {
        label: 'HTML',
        rating: '90%',
      },
      {
        label: 'CSS',
        rating: '90%',
      },
    ],
    backend: [
      {
        label: 'NodeJS',
        rating: '70%',
      },
      {
        label: 'MongoDB',
        rating: '50%',
      },
      {
        label: 'ExpressJS',
        rating: '50%',
      },
    ],
    additional: [
      {
        label: 'Photoshop',
        rating: '70%',
      },
      {
        label: 'Figma',
        rating: '60%',
      },
      {
        label: 'AWS',
        rating: '60%',
      },
      {
        label: 'RxJS',
        rating: '80%',
      },
    ],
  };

  constructor(private app: AppComponent) {}

  ngOnInit() {
    const subscriber = this.app.currentPage$.subscribe((currentPage) => {
      if (currentPage === 'skills-page') {
        this.triggerAnimation = true;
        subscriber.unsubscribe();
      }
    });
  }
}
