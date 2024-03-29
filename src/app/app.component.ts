import { Component } from '@angular/core';
import { TestService } from './services/test.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pacs-client';

  testData$: Observable<boolean>;

  constructor(private testService: TestService) {
    this.testData$ = this.testService.getTestData();
  }
}
