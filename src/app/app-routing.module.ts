import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanQrCodeComponent } from './scan-qr-code/scan-qr-code.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreationComponent } from './creation/creation.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ReferenceComponent } from './reference/reference.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: ConnexionComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'scan', component: ScanQrCodeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'creation', component: CreationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
