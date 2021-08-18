import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('container') container: ElementRef;
  title = 'funtime-youthopia';

  scrollLen: number;
  desktop_view: boolean;

  ngOnInit() {
    this.screenConstant();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenConstant();
  }

  screenConstant(){
    if (window.screen.width < 1024) {
      this.scrollLen = 310
      this.desktop_view = false;
    }
    else {
      this.scrollLen = 510
      this.desktop_view = true;
    }
  }

  scrollLeft() {
    this.container.nativeElement.scrollTo({ left: (this.container.nativeElement.scrollLeft - this.scrollLen), behavior: 'smooth' });
  }

  scrollRight() {
    this.container.nativeElement.scrollTo({ left: (this.container.nativeElement.scrollLeft + this.scrollLen), behavior: 'smooth' });
  }
}
