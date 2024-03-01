import {IAvailable} from "./services/space-wizards/space-wizards.types";

export interface IEmptyData {
  wizardsData: IWizardsData;
  available: IAvailable;
}

export interface IWizardsData {
  reactions: IAvailable[];
}
