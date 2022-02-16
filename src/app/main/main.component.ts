import { Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy {

  constructor() {
  }

  ngOnDestroy(): void {
  }
  showNav = true
}
