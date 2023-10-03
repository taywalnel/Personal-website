import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CurrentPageService } from 'src/app/services/current-page.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  hamburgerMenuOpen = false;
  currentPage = '';

  constructor(
    public app: AppComponent,
    private viewportScroller: ViewportScroller,
    private currentPageService: CurrentPageService
  ) {}

  ngOnInit() {
    this.viewportScroller.setOffset([0, 30]);
    this.currentPageService.currentPage$.subscribe((currentPage) => {
      this.currentPage = currentPage;
    });
  }

  linkClickHandler(page: string) {
    this.currentPage = page;
    this.viewportScroller.scrollToAnchor(page);
  }

  hamburgerClickHandler() {
    this.hamburgerMenuOpen = !this.hamburgerMenuOpen;
  }
}
