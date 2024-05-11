import { Component, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [NgIf],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent {
  @Input() titleInput: string = '';
  @Input() dateInput: string = '';
  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
  timeDifference: number | undefined;
  private subscription!: Subscription;

  ngOnInit() {
    this.startCountdown();
  }
 
  private getTimeDifference() {
    const currentDate = new Date();
    const selectedDateUTC = new Date(this.dateInput + 'T00:00:00Z');
    const selectedDate = new Date(selectedDateUTC.getTime() + (currentDate.getTimezoneOffset() * 60000));

    this.timeDifference = selectedDate.getTime() - currentDate.getTime();
    this.setTimeUnits(Math.abs(this.timeDifference));
  }

  private setTimeUnits(timeDifference: number) {
    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    this.seconds = Math.floor((timeDifference / 1000) % 60);
  }

  startCountdown() {
    this.subscription = interval(1000).subscribe(() => {
      this.getTimeDifference();
    });
  }

  stopCountdown() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
