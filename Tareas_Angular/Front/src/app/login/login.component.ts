import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import anime from 'animejs';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,  FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../styles.css'
 ],
 standalone: true
})
export class LoginComponent implements AfterViewInit{
  email=new FormControl('');
  password=new FormControl('');

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {

  }
 
  current: any = null;
 
  async onSubmit() {
    if (this.email.value !== null && this.password.value !== null) {
      await this.authService.login(this.email.value, this.password.value);
   } else {
      console.log('Email or password is null');
   }  
  }

  ngAfterViewInit() {
    const emailInput = document.querySelector('#email');
    if (emailInput) {
      emailInput.addEventListener('focus', (e) => {
        if (this.current) this.current.pause();
        this.current = anime({
          targets: 'path',
          strokeDashoffset: {
            value: 0,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
          }
        });
      });
    }
    const passwordInput = document.querySelector('#password');
    if (passwordInput) {
      passwordInput.addEventListener('focus', (e) => {
        if (this.current) this.current.pause();
        this.current = anime({
          targets: 'path',
          strokeDashoffset: {
            value: -336,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: '240 1386',
            duration: 700,
            easing: 'easeOutQuart'
          }
        });
      });
    }

    const submitInput = document.querySelector('#submit');
    if (submitInput) {
      submitInput.addEventListener('focus', (e) => {
        if (this.current) this.current.pause();
        this.current = anime({
          targets: 'path',
          strokeDashoffset: {
            value: -730,
            duration: 700,
            easing: 'easeOutQuart'
          },
          strokeDasharray: {
            value: '530 1386',
            duration: 700,
            easing: 'easeOutQuart'
          }
        });
      });
    }
 }
}