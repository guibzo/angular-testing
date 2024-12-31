import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { Calculator } from '../../services/calculator-service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public title = 'angular-testing';
  public firstName = signal('bozo');
  public firstNameCapitalized = computed(() => this.firstName().toUpperCase());
  public age = 50
  public avatarURL = 'https://github.com/guibzo.png';

  public headerCount = signal(0);

  public items = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
  ];

  private calculatorService = inject(Calculator);

  public totalCost = this.calculatorService.sum(30, 55);

  public printEvent(event: number) {
    this.headerCount.set(event);
    console.log(`printEvent ${event}`);
  }

  public sendForm(event: Event) {
    event.preventDefault();
    console.log(event);
  }
}