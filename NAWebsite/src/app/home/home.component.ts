import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title has-text-white has-background-dark is-size-2">
            WELCOME TO MY WEBSITE!
          </p>
        </div>
      </div>
    </section>

    <!-- About Me! -->
    <div class="hero-body">
      <div class="container has-text-centered has-text-primary">
        <h1 class="title">
          Hello my name is Nicholas Ayson!
          </h1>
          <h2 class="subtitle">
          I am currently a rising senior into a Computer Science Degree at California State University Fullerton. Former IT intern at WNC & Associates. Also accepted a Technology Development Internship role with the Software Engineering team at OptumRx, technology division of United HealthGroup, for the Summer of 2022. My main goal is to find a suitable job in software engineering or software development (specific field is open).
          </h2>
      </div>
    </div>
    
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
                <img src="assets/image/instagram-background.png"alt="">
              </div>
              <div class="card-content">
                <a href="https://www.instagram.com/nick.ayson77/">
                <button class="button is-medium is-primary is-light has-text-centered">
                  <span class="icon is-medium">
                    <img src="assets/image/instagram-icon.png" alt="">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Instagram</span>
                </button>
                </a>
                <p class="title is-size-5">
                  <br>
                  This is my Instagram! Please click the button and feel free to follow me! I will follow you back!
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
    .card {
      height: 100%;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
