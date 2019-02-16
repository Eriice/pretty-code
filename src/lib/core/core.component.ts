import { Component, OnInit, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { LoggerService } from '../service/logger.service';
import { PrettyPrinterService } from "../service/pretty-printer.service";
import { CopierService } from "../service/copier.service"
import { MatSnackBar } from '@angular/material';

/**
 * If linenums is not set, this is the default maximum number of lines that
 * an example can display without line numbers.
 */
const DEFAULT_LINE_NUMS_COUNT = 10;

/**
 * Formatted Code Block
 *
 * Pretty renders a code block, used by code-example and code-tabs embedded components.
 *
 * Example usage:
 *
 * <app-code-core
 *   [language]="ts"
 *   [linenums]="true">
 * </app-code-core>
 *
 * Renders code provided through the `updateCode` method.
 */

@Component({
  selector: 'app-code-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  
  /** Code that should be formatted with current inputs and displayed in the view. */
  private _code: string;
  get code(): string {
    return this._code;
  }
  set code(code: string) {
    this._code = code;
    if (!this._code || !this.code.trim()) {
      this.showMissingCodeMessage()
    } else {
      this.formatDisplayedCode()
    }
  }

  // copy text
  private codeText: string;

  /** Language to render the code (e.g. javascript, dart, typescript). */
  @Input() language: string;
 
  /**
   * Whether to display line numbers:
   *  - If false: hide
   *  - If true: show
   *  - If number: show but start at that number
   */
  @Input() linenums: boolean | number | string;

  @Output() codeFormatted = new EventEmitter<void>();

  /** The element in the template that will display the formatted code. */
  @ViewChild('codeContainer') codeContainer: ElementRef;

  constructor(
    private snackbar: MatSnackBar,
    private pretty: PrettyPrinterService,
    private copier: CopierService,
    private logger: LoggerService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnChanges() {
  }

  /** Sets the message showing that the code could not be found. */
  private showMissingCodeMessage() {
    this.setCodeHtml(`<p class="code-missing">The code sample is missing! </p>`);
  }

  private formatDisplayedCode() {
    const leftAlignedCode = this.leftAlign(this.code);
    this.setCodeHtml(leftAlignedCode); // start with unformatted code
    this.codeText = this.getCodeText(); // store the unformatted code as text (for copying)

    this.pretty
        .formatCode(leftAlignedCode, this.language, this.getLinenums(leftAlignedCode))
        .subscribe(c => {return this.setCodeHtml(c)}, err => { /* ignore failure to format */ }
    );
  }

  /** let the code string left indent until one of the code line touch the left side without space */
  private leftAlign(text: string): string {
    let indent = Number.MAX_VALUE;

    const lines = text.split('\n');
    lines.forEach(line => {
      const lineIndent = line.search(/\S/);
      if (lineIndent !== -1) {
        indent = Math.min(lineIndent, indent);
      }
    });

    return lines.map(line => line.substr(indent)).join('\n').trim();
  }

  /** Sets the innerHTML of the code container to the provided code string. */
  private setCodeHtml(formattedCode: string) {
    // **Security:** Code example content is provided by docs authors and as such its considered to
    // be safe for innerHTML purposes.
    this.codeContainer.nativeElement.innerHTML = formattedCode;
  }

  /** Gets the textContent of the displayed code element. */
  private getCodeText() {
    // `prettify` may remove newlines, e.g. when `linenums` are on. Retrieve the content of the
    // container as text, before prettifying it.
    // We take the textContent because we don't want it to be HTML encoded.
    return this.codeContainer.nativeElement.textContent;
  }

  /** Copies the code snippet to the user's clipboard. */
  doCopy() {
    const code = this.codeText;
    const successfullyCopied = this.copier.copyText(code);

    if (successfullyCopied) {
      this.logger.log('Copied code to clipboard:', code);
      
      this.snackbar.open('Code Copied', '', { duration: 800 });
    } else {
      this.logger.error(new Error(`ERROR copying code to clipboard: "${code}"`));
      this.snackbar.open('Copy failed. Please try again!', '', { duration: 800 });
    }
  }
  
  /** Gets the calculated value of linenums (boolean/number). */
  getLinenums(code: string) {
    const linenums =
      typeof this.linenums === 'boolean' ? this.linenums :
      this.linenums === 'true' ? true :
      this.linenums === 'false' ? false :
      typeof this.linenums === 'string' ? parseInt(this.linenums, 10) :
      this.linenums;

    // if no linenums, enable line numbers if more than one line
    return linenums == null || isNaN(linenums as number) ?
        (code.match(/\n/g) || []).length > DEFAULT_LINE_NUMS_COUNT : linenums;
  }

  open() {
    this.snackbar.open('Code Copied', '', { duration: 800 });
  }
}