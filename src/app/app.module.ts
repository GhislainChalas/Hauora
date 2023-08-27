import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './resume/resume.component';
import { ScanQrCodeComponent } from './scan-qr-code/scan-qr-code.component';
import { CreationComponent } from './creation/creation.component';
import { QRCodeModule } from 'angularx-qrcode';
import { GenerateQrCodeComponent } from './generate-qr-code/generate-qr-code.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { HistoryComponent } from './history/history.component';
import { MedicalDataComponent } from './medical-data/medical-data.component';
import { ReferenceComponent } from './reference/reference.component';
import { DataService } from './services/data.service';
import { DataProvider } from './providers/data.provider';
import { AdmissionComponent } from './admission/admission.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ResumeComponent,
    ScanQrCodeComponent,
    CreationComponent,
    GenerateQrCodeComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    PersonalDataComponent,
    HistoryComponent,
    MedicalDataComponent,
    ReferenceComponent,
    AdmissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    ZXingScannerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    QRCodeModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [DataService, DataProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
