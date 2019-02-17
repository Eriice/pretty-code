import { Component, AfterViewInit, ViewChild, Input, ViewChildren, QueryList, OnInit } from '@angular/core';
import { CoreComponent } from '../core/core.component';
import { Config } from '../model/config'
import * as he from 'he'


/**
 * Renders a set of tab group of code snippets.
 *
 * The innerHTML of the `<code-tabs>` component should contain `<code-pane>` elements.
 * Each `<code-pane>` has the same interface as the embedded `<code-example>` component.
 * The optional `linenums` attribute is the default `linenums` for each code pane.
 */

@Component({
  selector: 'app-code-tabs',
  templateUrl: './code-tabs.component.html',
  styleUrls: ['./code-tabs.component.scss']
})
export class CodeTabsComponent implements OnInit {
  
  /** render component according to config  */
  @Input() config: Config[];

  @Input() linenums: boolean | number |string;

  @ViewChild('content') content;

  @ViewChildren(CoreComponent) coreComponents: QueryList<CoreComponent>;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.coreComponents.toArray().forEach((codeComponent, i) => {
      codeComponent.code = he.encode(this.config[i].code, {'encodeEverything': true});
    });
  }
}



