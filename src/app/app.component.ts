import { Component, OnInit } from '@angular/core';
import { LoggingService } from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent implements OnInit {
  title = 'full-angular-app';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  value = 10;

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
      this.loggingService.logStatus(String(firedNumber));
    } else {
      this.oddNumbers.push(firedNumber);
      this.loggingService.logStatus(String(firedNumber));
    }
  }

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    
  }
  
}
