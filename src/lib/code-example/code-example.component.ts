import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ElementRef } from "@angular/core";

import { CoreComponent } from "../core/core.component";

import { Config } from '../model/config'
import * as he from 'he'
/**
 * An embeddable code block that displays nicely formatted code.
 * 
 * Example usage:
 * 
 * by pass the code block by params
 * Example usage:
 * 
 * <code-example [config]="config">
 * </code-example>
 * 
 * If both modes exist simultaneously, use the second one.
 */

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent implements OnInit {

  @Input() config: Config;

  @ViewChild('content') content: ElementRef;
  
  @ViewChild(CoreComponent) coreContent: CoreComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // parse the encode code
    const encodeHTML = he.encode(this.config.code, {'encodeEverything': true})
    this.coreContent.code = encodeHTML
  }
}
