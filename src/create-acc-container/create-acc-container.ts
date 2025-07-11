import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service/user-service';
import { ValidatorButton } from '../validator-button/validator-button';

@Component({
  selector: 'app-create-acc-container',
  standalone: true,
  imports: [FormsModule, ValidatorButton],
  templateUrl: './create-acc-container.html',
  styleUrl: './create-acc-container.css'
})
export class CreateAccContainer {
  email = ""
  password = ""
  username = ""

  constructor(private userService: UserService) {}

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password,
      username: this.username
    }

    console.log("ça marche", user)

    this.userService.registerUser(user).subscribe({
      next: (res) => {
        console.log("Succès :", res)
      },
      error: (err) => {
        console.error("Erreur :", err)
      }
    })
  }
}
