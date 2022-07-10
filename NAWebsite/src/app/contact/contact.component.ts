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
    <section class="hero is-fullheight">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="columns is-8 is-variable ">
					<div class="column is-two-thirds has-text-left">
						<h1 class="title is-2">
              <span class="icon is-medium">
                    <img src="assets/image/envelope.png" alt="">
              </span> 
                Personal Emails
            </h1>
						<p class="is-size-4 mb-4">
              Feel free to reach out to me via these emails:
            </p>
            <div class="columns">
              <div class="column">
              <button class="button is-medium is-primary is-light has-text-centered">
                <a [href]="mailText">aysonnicholas@gmail.com</a> <br>
                <span (click)="mailMeaysonnicholas()"></span>
              </button> 
              </div>
            <div class="column">
              <button class="button is-medium is-primary is-light has-text-centered">
                <a [href]="mailText2">nick.ayson7@gmail.com</a> <br>
                <span (click)="mailMenickayson7()"></span>
              </button>
            </div>
            <div class="column">
            </div>
              <div class="column">
              </div>
            </div>
            <h1 class="title is-2">
              <span class="icon is-medium">
                    <img src="assets/image/envelope.png" alt="">
              </span> 
                School Email
            </h1>
            <p class="is-size-4 mb-4">
              Feel free to reach out to me via my school email:
            </p>
            <div class="columns">
              <div class="column">
              <button class="button is-medium is-primary is-light has-text-centered">
                <a [href]="mailText3">nick.ayson@csu.fullerton.edu</a> <br>
                <span (click)="mailMeSchool()"></span>
              </button> 
              </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
              <div class="column">
              </div>
            </div>
            <h1 class="title is-2">
              <span class="icon is-medium">
                    <img src="assets/image/phone.webp" alt="">
              </span> 
                Phone Number
            </h1>
            <p class="is-size-4 mb-4">
              (951) 265-9915
            </p>
					</div>
				</div>
			</div>
		</div>
	</section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  name = 'test';

  mailText:string = "";
  mailText2:string = "";
  mailText3:string = "";

  
  ngOnInit(){
    this.mailText = "mailto:aysonnicholas@gmail.com?subject=files&body=";
    this.mailText2 = "mailto:nick.ayson7@gmail.com?subject=files&body=";
    this.mailText3 = "mailto:nick.ayson@csu.fullerton.edu?subject=files&body=";
  }

  mailMeaysonnicholas(){
    this.mailText = "mailto:aysonnicholas@gmail.com?subject=files&body=";
    window.location.href = this.mailText;
  }

  mailMenickayson7(){
    this.mailText2 = "mailto:nick.ayson7@gmail.com?subject=files&body=";
    window.location.href = this.mailText2;
  }

  mailMeSchool(){
    this.mailText3 = "mailto:nick.ayson@csu.fullerton.edu?subject=files&body=";
    window.location.href = this.mailText3;
  }


}
