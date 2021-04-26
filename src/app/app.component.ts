import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMultilanguage';
  language: string = 'en';
  constructor(public translate: TranslateService) {

    translate.use(this.language);
  }

  public changeLanguage(language: string) {
    this.translate.use(language);
  }
}
