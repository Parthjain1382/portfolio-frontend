import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hobies',
  standalone: true,
  imports: [],
  templateUrl: './hobies.component.html',
  styleUrl: './hobies.component.css'
})
export class HobiesComponent {
   constructor(private dialogRef: MatDialogRef<HobiesComponent>) {}

    onClose() {
      this.dialogRef.close();
    }

    openPdf() {
      const pdfUrl = 'assets/pdf/education.pdf';
      const pdfWindow = window.open(pdfUrl, '_blank');
      if (pdfWindow) {
        pdfWindow.focus();
      } else {
        alert('Please allow popups for this website');
      }
    }

    downloadPdf() {
      const pdfUrl = 'assets/pdf/education.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'education.pdf';
      link.click();
    }
}
