import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
