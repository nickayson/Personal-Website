import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          Contact Me!
        </p>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
