import { Component, Input, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.css']
})
export class CodeDisplayComponent implements OnInit {

  iconCopy = faCopy;

  @Input() code!: string;
  @Input() isCode!: boolean;

  constructor(private clipboardService: ClipboardService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  copyToClipboard() {
    this.clipboardService.copyFromContent(this.code);
    this._snackBar.open('Uspjesno kopiran sadrzaj!', 'Zatvori', {
      duration: 3000
    });
  }


}
