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
    
    <!-- cards -->
    <section class="section">
      <div class="container">
        <h3 class="title has-text-centered has-text-primary-dark">Some Useful Links!</h3>
        <div class="columns mt-5is-8is-variable">
          <div class="column is-4-tablet is-4-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-8">
                <img src="assets/image/explore-github.jpg"alt="">
              </div>
              <div class="card-content">
                <a href="https://github.com/nickayson">
                <button class="button is-medium is-primary is-light has-text-centered">
                  <span class="icon is-medium">
                    <img src="assets/image/github-logo.png" alt="">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </button>
                </a>
                <p class="title is-size-5">
                  <br>
                  This is my GitHub! Please click the button to see some of personal projects!
                </p>
              </div>
            </div>
          </div>

          <div class="column is-4-tablet is-4-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-8">
                <img src="assets/image/LinkedIn_demo.webp"alt="">
              </div>
              <div class="card-content">
                <a href="https://www.linkedin.com/in/nicholas-ayson/">
                <button class="button is-medium is-primary is-light has-text-centered">
                  <span class="icon is-medium">
                    <img src="assets/image/LinkedIn_logo.png" alt="">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>LinkedIn</span>
                </button>
                </a>
                <p class="title is-size-5">
                  <br>
                  This is my LinkedIn! Please click the button to see my past work experience! Feel free to connect with me!
                </p>
              </div>
            </div>
          </div>

          <div class="column is-4-tablet is-4-desktop">
            <div class="card">
              <div class="card-image has-text-centered px-8">
                <img src="assets/image/LinkedIn_demo.webp"alt="">
              </div>
              <div class="card-content">
                <a href="https://www.linkedin.com/in/nicholas-ayson/">
                <button class="button is-medium is-primary is-light has-text-centered">
                  <span class="icon is-medium">
                    <img src="assets/image/LinkedIn_logo.png" alt="">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>LinkedIn</span>
                </button>
                </a>
                <p class="title is-size-5">
                  <br>
                  This is my LinkedIn! Please click the button to see my past work experience! Feel free to connect with me!
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>


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
