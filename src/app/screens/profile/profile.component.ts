import { ContentContainerComponent } from '@/components/content-container/content-container.component';
import { HeaderComponent } from '@/components/header/header.component';
import { ReversePipe } from '@/pipes/reverse/pipe';
import { CarService } from '@/services/car/service';
import { GetUserService } from '@/services/get-user/service';
import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    HeaderComponent,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    DecimalPipe,
    ReversePipe,
    ContentContainerComponent,
  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(private carService: CarService) {}

  private getUserService = inject(GetUserService);
  userData = this.getUserService.execute();

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  carData() {
    return this.carService.execute();
  }

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
