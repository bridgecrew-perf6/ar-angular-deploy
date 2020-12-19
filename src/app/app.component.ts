import { Component, ViewChild } from '@angular/core';
import {
  AR_EXPORTS,
  HtmlExportService,
  PdfExportService,
  ViewerComponent,
  XlsxExportService,
} from '@grapecity/activereports-angular';
import { Core } from '@grapecity/activereports';

@Component({
  selector: 'app-root',
  template:
    '<div id="viewer-host"><gc-activereports-viewer (init)="onViewerInit()"> </gc-activereports-viewer></div> ',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: AR_EXPORTS,
      useClass: PdfExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: HtmlExportService,
      multi: true,
    },
    {
      provide: AR_EXPORTS,
      useClass: XlsxExportService,
      multi: true,
    },
  ],
})
export class AppComponent {
  @ViewChild(ViewerComponent, { static: false }) reportViewer: ViewerComponent;
  onViewerInit() {
    Core.FontStore.registerFonts('assets/fontsConfig.json').then(() => {
      this.reportViewer.open('assets/Frontstore.rdlx-json');
    });
  }
}
