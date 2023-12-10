import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import {ReactionsService} from "./core/services/space-wizards/reactions.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private electronService: ElectronService,
    private reactionsService: ReactionsService,
  ) {
    if (electronService.isElectron) {
    } else {
    }
    this.reactionsService.initReactions();
  }
}
