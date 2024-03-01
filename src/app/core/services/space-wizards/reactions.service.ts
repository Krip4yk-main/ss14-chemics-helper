import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CoreStorage} from "../../core.storage";
import {COPY} from "../../../app.helper";
import * as yaml from 'js-yaml'
import {IReaction} from "./space-wizards.types";

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {
  reactionsUrl: string = 'Resources/Prototypes/Recipes/Reactions/'
  format: string = '.yml';

  reactions: string[] = [
    'botany',
    'chemicals',
    'cleaning',
    'drinks',
    'food',
    'fun',
    'medicine',
    'pyrotechnic',
    'single_reagent',
  ]

  constructor(
    private http: HttpClient,
    private storage: CoreStorage,
  ) {
  }

  initReactions() {
    for (const react of this.reactions) {
      this.http.get(this.storage.wizardUrl + this.reactionsUrl + react + this.format,
        {responseType: 'text'})
        .toPromise()
        .then((res: any) => {
          const data: string = COPY(res);
          let parsedData: string = data.replaceAll(/!type/g, 'mType');
          parsedData = parsedData.replaceAll(/:(?=[a-zA-Z])/g, ': ');
          const content: IReaction[] = yaml.load(parsedData) as IReaction[];
          this.storage.wizardsData.reactions.push({
            label: react,
            name: react[0].toUpperCase() + react.substring(1),
            filter: '',
            looked: false,
            content: content,
          });
        })
        .catch((error: any) => {
          console.warn(`${react} not available`)
        })
    }
  }
}
