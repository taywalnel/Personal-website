import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent {
  skills = {
    languages: [
      {
        label: 'TypeScript',
        rating: '80%',
      },
      {
        label: 'JavaScript',
        rating: '70%',
      },
      {
        label: 'HTML',
        rating: '90%',
      },
      {
        label: 'CSS',
        rating: '90%',
      },
      {
        label: 'Python',
        rating: '40%',
      },
    ],
    technology: [
      {
        label: 'Angular',
        rating: '90%',
      },
      {
        label: 'React',
        rating: '50%',
      },
      {
        label: 'NodeJS',
        rating: '60%',
      },
      {
        label: 'RxJS',
        rating: '70%',
      },
    ],
    software: [
      {
        label: 'Photoshop',
        rating: '70%',
      },
      {
        label: 'Figma',
        rating: '70%',
      },
      {
        label: 'AWS',
        rating: '60%',
      },
    ],
  };
}
