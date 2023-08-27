import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @Output() displaySignUpvent = new EventEmitter<Boolean>();

  displaySignUp(): void {
    this.displaySignUpvent.emit(false);
  }
}
