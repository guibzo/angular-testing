import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() private incrementCountEvent = new EventEmitter<number>();
  @Input()
  public isAuthenticated = true;
  public count = 0;

  public onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
}
