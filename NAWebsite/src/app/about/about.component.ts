import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="is-size-4">I have a lot of passion for all things technology that has stemmed from my the first computer my parents got me when I was a kid.</p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
