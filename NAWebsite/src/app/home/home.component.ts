import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title has-text-white has-background-dark">
            WELCOME TO MY WEBSITE!
          </h1>
        </div>
      </div>
    </section>

  
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="assets/image/explore-github.jpg" alt="Placeholder image" width=48>
        </figure>
      </div>
      <div class="card-content is-dark">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="assets/image/60242602.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">Nicholas Ayson</p>
          <p class="subtitle is-6">GitbHub Projects</p>
        </div>
        <a href="https://github.com/nickayson">
        <button class="button is-medium is-primary is-light">
          <span class="icon">
            <i class="fab fa-github"></i>
            <img src="assets/image/github-logo.png" alt="Placeholder image">
          </span>
          <span>GitHub</span>
        </button>
        </a>
      </div>

        <div class="content">
          This is my GitHub page it includes all of my coding personal coding adventures!
          <br>
        </div>
      </div>
    </div>

  `,
  styles: [ `
    .hero {
      background-image: url('/assets/image/Home.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
