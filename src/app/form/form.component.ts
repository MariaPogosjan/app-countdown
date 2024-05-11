import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() titleInput = new EventEmitter<string>();
  @Output() dateInputChange = new EventEmitter<string>();
  dateInput: string = '';  
  minDate: string = '';

  constructor() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  onEnter(value: string) {
    this.titleInput.emit(value);
  }

  onDateChange(value: string) {
    this.dateInputChange.emit(value);
  }


}
