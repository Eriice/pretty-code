import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'snack-bar-component-example',
  templateUrl: 'snack-bar-component-example.html',
  styleUrls: ['snack-bar-component-example.css'],
})
export class SnackBarComponentExample {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('123')
  }
}


@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */