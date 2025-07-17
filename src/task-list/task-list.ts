import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service/task-service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskList implements OnInit {
  tasks: any[] = [] // c'est la dedans qu'on stock les taches
  newTaskTitle: string = '' // ça sera le texte de la tache

  constructor(private taskService: TaskService) {}

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (res: any) => {
        this.tasks = res.data;
      },
      error: (err) => console.error("Erreur lors du chargement :", err)
    });
  }
  
  ngOnInit(): void {
    this.loadTasks() // ça c'est pour afficher les tache quand la page s'ouvre
  }

  addTask() {
    // console.log("Envoi de la tâche :", this.newTaskTitle);
  
    this.taskService.createTask({ label: this.newTaskTitle}).subscribe({
      next: () => {
        // console.log("Tâche créée");
        this.newTaskTitle = '';
        this.loadTasks();
      },
      error: (err) => {
        console.error("Erreur lors de la création :", err);
      }
    });
  }
  

  toggleTaskDone(task: any) {
    this.taskService.updateTask(task._id, { label: task.label }).subscribe(() => {
      this.loadTasks();
    });
    
  }

  deleteTask(task: any) {
    this.taskService.deleteTask(task._id).subscribe(() => {
      this.loadTasks()
    })
  }
}
