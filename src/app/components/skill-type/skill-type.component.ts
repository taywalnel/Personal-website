import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-type',
  templateUrl: './skill-type.component.html',
  styleUrls: ['./skill-type.component.scss'],
})
export class SkillTypeComponent {
  @Input() title: string;
  @Input() skills: { label: string; rating: string }[];
}
