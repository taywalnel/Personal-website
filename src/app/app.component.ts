import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  merge,
  Observable,
  of,
  Subject,
  switchMap
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'personal-website';
  scrollEvent$: Observable<Event>;
  currentPage$: Observable<string>;
  pageInitialized$ = new Subject<boolean>();

  ngOnInit() {
    this.scrollEvent$ = fromEvent(document, 'scroll');
    this.currentPage$ = merge(this.pageInitialized$, this.scrollEvent$).pipe(
      debounceTime(10),
      switchMap(() => this.getCurrentPage()),
      filter(this.isDefined),
      distinctUntilChanged(),
      debounceTime(300)
    );
  }

  ngAfterViewInit(): void {
    this.pageInitialized$.next(true);
  }

  getCurrentPage(): Observable<string | undefined> {
    const centerOfViewport = window.innerHeight / 2;
    const pageElements = document.querySelectorAll('.page-wrapper');
    const pagesAndTheirClosestValueToCenter = Array.from(pageElements).map(
      (page) => {
        const pageId = page.id;
        const closestValueToCenter =
          Math.abs(page.getBoundingClientRect().top - centerOfViewport) <
          Math.abs(page.getBoundingClientRect().bottom - centerOfViewport)
            ? page.getBoundingClientRect().top
            : page.getBoundingClientRect().bottom;
        return { pageId, closestValueToCenter };
      }
    );
    const currentPage = this.getPageClosestToCenterOfViewport(
      pagesAndTheirClosestValueToCenter,
      centerOfViewport
    );
    return of(currentPage);
  }

  getPageClosestToCenterOfViewport(
    pages: {
      pageId: string;
      closestValueToCenter: number;
    }[],
    centerOfViewport: number
  ): string {
    return pages.reduce((prev, curr) => {
      return Math.abs(curr.closestValueToCenter - centerOfViewport) <
        Math.abs(prev.closestValueToCenter - centerOfViewport)
        ? curr
        : prev;
    }).pageId;
  }

  isDefined<T>(
    arg: T | null | undefined
  ): arg is T extends null | undefined ? never : T {
    return arg !== null && arg !== undefined;
  }
}
