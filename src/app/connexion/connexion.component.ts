import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
})
export class ConnexionComponent {
  isSignUpDisplayed: Boolean = false;

  public displaySignUp(bool: Boolean): void {
    this.isSignUpDisplayed = bool;
  }
}
