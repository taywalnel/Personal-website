import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CurrentPageService } from 'src/app/services/current-page.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent {
  timelineItems = [
    {
      affiliation: 'Auto & General',
      location: 'Brisbane, Australia',
      positions: [
        {
          title: 'Analyst Software Developer',
          type: 'employment',
          isFullTime: true,
          start: '2023',
          end: 'Present',
        },
      ],
    },
    {
      affiliation: 'University of Canterbury',
      location: 'Christchurch, New Zealand',
      positions: [
        {
          title: 'Associate Software Developer',
          type: 'employment',
          isFullTime: true,
          start: '2022',
          end: '2023',
        },
        {
          title: 'Graduate Software Developer',
          type: 'employment',
          isFullTime: true,
          start: '2021',
          end: '2022',
        },
      ],
    },
    {
      affiliation: 'Emporia State University',
      location: 'Kansas, United States',
      positions: [
        {
          title: 'Student Web Developer',
          type: 'employment',
          isFullTime: false,
          start: '2019',
          end: '2021',
        },
        {
          title: 'BSc Computer Science',
          type: 'education',
          isFullTime: true,
          start: '2017',
          end: '2021',
        },
      ],
    },
  ];
  constructor(public currentPageService: CurrentPageService) {}
}
