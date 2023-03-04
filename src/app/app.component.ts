import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes';
  name: string = '';
  date: string = '';
  amount = 0;
  height = 0;
  miles = 0;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2015,
  };

  onMilesChange(e: Event) {
    if (!e?.target) {
      return;
    }
    const miles = parseFloat((e.target as HTMLInputElement).value);
    if (isNaN(miles)) {
      return;
    }
    this.miles = miles;
  }

  onNameChange(event: Event) {
    if (!event?.target) {
      return;
    }
    this.name = (event.target as HTMLInputElement).value;
  }
  onDateChange(event: Event) {
    if (!event?.target) {
      return;
    }
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange(event: Event) {
    if (!event?.target) {
      return;
    }
    const amount = parseFloat((event.target as HTMLInputElement).value);
    if (isNaN(amount)) {
      return;
    }
    this.amount = amount;
  }
  onHeightChange(event: Event) {
    if (!event?.target) {
      return;
    }
    const height = parseFloat((event.target as HTMLInputElement).value);
    if (isNaN(height)) {
      return;
    }
    this.height = height;
  }
}
