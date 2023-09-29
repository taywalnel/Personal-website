import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CurrentPageService } from 'src/app/services/current-page.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent {
  constructor(public currentPageService: CurrentPageService) {}
}
