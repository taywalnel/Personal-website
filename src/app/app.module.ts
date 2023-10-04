import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './components/pages/skills-page/skills-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { PageDividerComponent } from './components/page-divider/page-divider.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ExperiencePageComponent } from './components/pages/experience-page/experience-page.component';
import { ExperienceItemComponent } from './components/pages/experience-page/components/experience-item/experience-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LandingPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    ContactPageComponent,
    PageDividerComponent,
    PageTitleComponent,
    ExperiencePageComponent,
    ExperienceItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
