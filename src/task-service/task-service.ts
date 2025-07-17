import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private apiUrl = 'https://todof.woopear.fr/api/v1/task';

  createTask(task: { label: string }) {
    return this.http.post(this.apiUrl, task);
  }

  getTasks() {
    return this.http.get(this.apiUrl);
  }

  updateTask(id: string, task: { label: string }) {
    return this.http.put(`${this.apiUrl}/${id}/label/user`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}/user`);
  }
}
