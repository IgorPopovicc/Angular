import { Component, Input, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css']
})
export class CodeDisplayComponent implements OnInit {

  iconCopy = faCopy;

  @Input() code!: string;
  @Input() type!: string;

  constructor(private clipboardService: ClipboardService, private _snackBar: MatSnackBar, private sanitizer: DomSanitizer, private sharedService: SharedService) { }

  ngOnInit() {
  }

  copyToClipboard() {
    this.clipboardService.copyFromContent(this.code);
    this._snackBar.open('Uspjesno kopiran sadrzaj!', 'Zatvori', {
      duration: 3000
    });
  }

  sanitizeCode(code: string): SafeHtml {
    const sanitizedCode = code.replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedCode);
  }

  scrollToTop() {
    this.sharedService.scrollToTop();
  }

}
