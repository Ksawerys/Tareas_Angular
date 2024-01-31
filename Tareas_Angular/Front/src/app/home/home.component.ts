import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,FooterComponent,HeaderComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.form = this.fb.group({
       description: ['', Validators.required],
       difficulty: ['', Validators.required],
       assignment: [''],
       time_estimated: ['', Validators.required],
       time_dedicated: ['', Validators.required],
       progress: ['', Validators.required],
       done: [false],
    });
   }
   submitForm() {
    this.taskService.createTask(this.form.value).subscribe(
       response => {
         console.log('Tarea creada exitosamente');
       },
       error => {
         console.error('Hubo un error al crear la tarea');
       }
    );
      }
}

