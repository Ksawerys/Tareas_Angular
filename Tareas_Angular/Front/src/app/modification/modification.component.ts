import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { TaskService } from '../task.service';
import { Tarea } from '../interfaces/Tarea';

@Component({
  selector: 'app-modification',
  imports: [FooterComponent, RouterLink,HeaderComponent],
  templateUrl: './modification.component.html',
  styleUrls: [
    './modification.component.css',
    '../../styles.css'
 ],
  standalone: true
})
export class ModificationComponent implements OnInit{
  tasks: Tarea[];

  constructor(private taskService: TaskService) { 
    this.tasks = [];
   }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
       tasks => {
          this.tasks = tasks;
       },
       error => {
          console.error('Hubo un error al obtener las tareas');
       }
    );
   }
}
