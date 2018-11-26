import { Component } from '@angular/core';

@Component({
  selector: 'personal-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angkor';
  public scrollBtnOpacity: number = 0;

  constructor() {
    window.addEventListener('scroll', (event: any) => {
      if(window.pageYOffset > 50){
        this.scrollBtnOpacity = 1;
      }
      else {
        this.scrollBtnOpacity = 0;
      }
  });
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
