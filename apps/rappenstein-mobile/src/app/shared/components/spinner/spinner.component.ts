import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() isSpinning: boolean;
  @Input() isSpinningListMode: boolean;
  @Input() spinnerMessage = 'Wir sind gleich soweit...';

  constructor() { }

  public ngOnInit(): void { }
}
