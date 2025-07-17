import { Component, inject } from '@angular/core';
import { AuthService } from '../auth-service/authservice';
import { HttpClient } from '@angular/common/http';
import { JsonPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service/task-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private authService = inject(AuthService);
  private http = inject(HttpClient);
  private taskService = inject(TaskService);

  isLoggedIn = this.authService.isLoggedIn;
  data: any = null;

  tasks: any[] = [];
  newTaskLabel: string = '';
  editingTaskId: string | null = null;
  editedTaskLabel: string = ''; 

  constructor() {
    this.loadTasks();
  }

  logout() {
    this.authService.logout();
  }

  loadData() {
    this.http.get('https://todof.woopear.fr/api/v1/user/profil').subscribe({
      next: (response) => this.data = response,
      error: (error) => console.error('Erreur:', error)
    });
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (res: any) => {
        this.tasks = res.data;
      },
      error: (err) => console.error("Erreur lors du chargement :", err)
    });
  }

  addTask() {
    this.taskService.createTask({ label: this.newTaskLabel }).subscribe(() => {
      this.newTaskLabel = '';
      this.loadTasks();
    });
  }

  startEdit(task: any) {
    this.editingTaskId = task.id;
    this.editedTaskLabel = task.label;
  }
  
  confirmEdit(task: any) {
  
    this.taskService.updateTask(task.id, { label: this.editedTaskLabel }).subscribe({
      next: () => {
        this.editingTaskId = null;
        this.editedTaskLabel = '';
        this.loadTasks();
      },
      error: (err) => console.error("Erreur lors de la modification :", err)
    });
  }
  
  

  cancelEdit() {
    this.editingTaskId = null;
    this.editedTaskLabel = '';
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
