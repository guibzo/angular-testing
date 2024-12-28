import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { Calculator } from './services/calculator-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TemplateBindingComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'angular-testing';
  public firstName = signal('bozo');
  public firstNameCapitalized = computed(() => this.firstName().toUpperCase());

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
