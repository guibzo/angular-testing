import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  public name = 'bozo';
}
