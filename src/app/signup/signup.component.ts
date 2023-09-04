import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreationConfirmationComponent } from '../dialog/modal-creation-confirmation/modal-creation-confirmation.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public user: any;
  @Output() displaySignUpvent = new EventEmitter<Boolean>();

  constructor(private userService: UserService, private dialog: MatDialog) {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      password: '',
    };
  }
  public displaySignUp(): void {
    this.displaySignUpvent.emit(false);
  }

  public async postUser(): Promise<void> {
    this.userService.postUser(this.user).then(() => {
      this.dialog.open(ModalCreationConfirmationComponent, {
        disableClose: true,
        height: '150px',
      });
    });
  }
}
