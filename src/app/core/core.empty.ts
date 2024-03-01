import {Injectable} from "@angular/core";
import {IEmptyData} from "./core.types";
import {COPY} from "../app.helper";

@Injectable({
  providedIn: 'root'
})
export class CoreEmpty {

  emptyData: IEmptyData = {
    wizardsData: {
      reactions: [],
    },
    available: {
      label: '',
      name: '',
      filter: '',
      looked: false,
      content: [],
    }
  };

  constructor() {
  }

  getEmpty(key: keyof IEmptyData) {
    return COPY(this.emptyData[key]);
  }
}
