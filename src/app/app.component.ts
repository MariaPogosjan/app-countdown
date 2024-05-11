import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FormComponent } from './form/form.component'
import { CountdownComponent } from './countdown/countdown.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FrontendChallenge'
  titleInput: string = '';
  dateInput: string = '';

  ngOnInit() {
    this.titleInput = localStorage.getItem('titleInput') || '';
    this.dateInput = localStorage.getItem('dateInput') || '';
  }

  onTitleInputChange(value: string) {
    this.titleInput = value;
    localStorage.setItem('titleInput', value);

  }

  onDateChange(value: string) {
    this.dateInput = value;
    localStorage.setItem('dateInput', value);
  }
}
