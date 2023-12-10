import {Injectable} from "@angular/core";
import {IWizardsData} from "./core.types";
import {CoreEmpty} from "./core.empty";

@Injectable({
  providedIn: 'root'
})
export class CoreStorage {
  wizardUrl: string = 'https://raw.githubusercontent.com/space-wizards/space-station-14/master/';

  wizardsData: IWizardsData = this.empty.getEmpty('wizardsData');

  constructor(private empty: CoreEmpty) {
  }
}
