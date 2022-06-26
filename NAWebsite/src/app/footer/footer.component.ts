import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
        <div class="container content has-text-centered">
          <p>Made With Bulma by Nicholas Ayson</p>
          <figure class="image is-128x128 is-inline-block">
              <img src="assets/image/bulma-logo.png">
          </figure>
        </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
