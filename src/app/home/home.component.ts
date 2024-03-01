import {Component, OnInit} from '@angular/core';
import {CoreStorage} from "../core/core.storage";
import {IAvailable, IReaction} from "../core/services/space-wizards/space-wizards.types";
import {CoreEmpty} from "../core/core.empty";
import {COPY} from "../app.helper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedReactionCategory: IAvailable[] = [this.empty.getEmpty("available"), this.empty.getEmpty("available")];
  filteredCategory: IAvailable[] = [this.empty.getEmpty("available"), this.empty.getEmpty("available")];
  selectedReaction: IReaction | undefined = undefined;
  selectedTree: IReaction[] = [];
  showMe: any;

  constructor(
    public storage: CoreStorage,
    public empty: CoreEmpty,
  ) {
  }

  ngOnInit(): void {
  }

  ddChange(event: IAvailable, i: 0 | 1) {
    if (!event.looked) {
      event.content.forEach((item: IReaction) => {
        item.isSimple = true;
        if (item.reactants) {
          for (const react in item.reactants) {
            item.reactants[react].isSimple = true;
            item.reactants[react].hasRecipe = false;
            if (this.storage.simpleList.includes(react)) {
              item.reactants[react].hasRecipe = true;
            } else {
              const newItem: IReaction | undefined = this.lookForRecipe(react);
              if (newItem) {
                item.isSimple = false;
                item.reactants[react].isSimple = false;
                item.reactants[react].hasRecipe = true;
              }
            }
          }
        }
      })
      event.looked = true;
    }
    this.selectedReactionCategory[i] = event;
    this.filter(i);
  }

  filter(i: 0 | 1) {
    const filter: string = this.selectedReactionCategory[i].filter.toLowerCase();
    if (!filter) {
      this.filteredCategory[i].content = COPY(this.selectedReactionCategory[i].content);
    } else {
      this.filteredCategory[i].content = COPY(this.selectedReactionCategory[i].content.filter((reaction: IReaction) => {
        return reaction.id.toLowerCase().includes(filter) ||
        (reaction.reactants &&
          Object.keys(reaction.reactants).map((el: string) => el.toLowerCase()).find((el: string) => el.includes(filter)));
      }))
    }
  }

  selectRecipe(item: IReaction) {
    this.selectedReaction = item;
    this.selectedTree = [];
    this.buildTree(item);
  }

  buildTree(item: IReaction) {
    item.isSimple = true;
    let itemAdded: boolean = false;
    if (item.reactants) {
      for (const react in item.reactants) {
        if (this.storage.simpleList.includes(react)) {
          item.reactants[react].hasRecipe = true;
        } else {
          const newItem: IReaction | undefined = this.lookForRecipe(react);
          if (newItem) {
            item.isSimple = false;
            if (!itemAdded) {
              this.selectedTree.push(item);
              itemAdded = true;
            }
            this.buildTree(newItem);
          }
        }
      }
    }
    if (!this.selectedTree.find((el: IReaction) => el.id === item.id)) {
      this.selectedTree.push(item);
    }
  }

  lookForRecipe(id: string) {
    for (const category of this.storage.wizardsData.reactions) {
      const found: IReaction | undefined = category.content.find((reaction: IReaction) => reaction.id === id);
      if (found) {
        return found;
      }
    }
    return undefined;
  }

  showMeItem(item: IReaction) {
    this.showMe = item;
    console.log('ShowMeItem response:');
    console.log(item);
  }

  protected readonly Object = Object;
  protected readonly JSON = JSON;
}
