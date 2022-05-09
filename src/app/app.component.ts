import { Component, OnInit } from '@angular/core';
import { AccountsService } from './shared/account.service';
import { LoggingService } from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AppComponent implements OnInit {
  title = 'full-angular-app';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  value = 10;
  accounts: {name: string, status: string}[] = [];
  activeUsers = ['Alan', 'YingShi'];
  inactiveUsers = ['Kyson', 'Kyler'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
      this.loggingService.logStatus(String(firedNumber));
    } else {
      this.oddNumbers.push(firedNumber);
      this.loggingService.logStatus(String(firedNumber));
    }
  }

  constructor(private loggingService: LoggingService, private accountService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
  
}
