import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent {
  triggerAnimation = false;
  skillsConfig = [
    {
      label: 'JavaScript',
      iconType: 'javascript',
    },
    {
      label: 'TypeScript',
      iconType: 'typescript',
    },
    {
      label: 'HTML',
      iconType: 'html',
    },
    {
      label: 'CSS',
      iconType: 'css',
    },
    {
      label: 'Angular',
      iconType: 'angular',
    },
    {
      label: 'React',
      iconType: 'react',
    },
    {
      label: 'NodeJS',
      iconType: 'nodejs',
    },
    {
      label: 'RxJS',
      iconType: 'rxjs',
    },

    {
      label: 'MongoDB',
      iconType: 'mongodb',
    },
    {
      label: 'Firebase',
      iconType: 'firebase',
    },
    {
      label: 'Figma',
      iconType: 'figma',
    },
    {
      label: 'Photoshop',
      iconType: 'photoshop',
    },
  ];

  constructor(public app: AppComponent) {}
}
