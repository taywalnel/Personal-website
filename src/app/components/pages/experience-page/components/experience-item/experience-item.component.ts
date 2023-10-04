import { Component, Input } from '@angular/core';

export interface ExperienceItem {
  affiliation: string;
  location: string;
  positions: Position[];
}

interface Position {
  title: string;
  type: string;
  isFullTime: boolean;
  start: string;
  end: string;
}

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
})
export class ExperienceItemComponent {
  @Input() experience: ExperienceItem;
}
