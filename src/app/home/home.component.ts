import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {COPY, parser} from "../app.helper";
import * as reaGroups from '../../assets/data/index';
import {emptyReactionGroup, IReaction, IReactionGroups} from "../shared/shared.types";
import {basicReagents} from "../../assets/data/basicReagents";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  importedFileName: string = '';
  importedFileContent: string = '';
  fileLoaded: boolean = false;
  copied: boolean = false;

  groupsNames: Array<keyof typeof reaGroups> = [];
  reactionsGroups: IReactionGroups = {};
  basicReagents: string[] = COPY(basicReagents);

  selectedReaction: IReaction | undefined;
  selectedTree: IReaction[] = [];

  firstSelectedGroup: keyof typeof reaGroups = 'meds';
  secondSelectedGroup: keyof typeof reaGroups = 'chems';

  constructor() {
  }

  ngOnInit(): void {
    this.initGroups();
    console.log(this.reactionsGroups);
  }

  initGroups() {
    for (const key of Object.keys(reaGroups)) {
      const subKey: keyof typeof reaGroups = key as keyof typeof reaGroups;
      this.groupsNames.push(subKey);
      this.reactionsGroups[key] = COPY(emptyReactionGroup);
      this.reactionsGroups[key].reactions = COPY(reaGroups[subKey].default);
      this.reactionsGroups[key].reactions = this.uniSort(this.reactionsGroups[key].reactions);
      this.reactionsGroups[key].reactions = this.uniMap(this.reactionsGroups[key].reactions);
      this.reactionsGroups[key].filteredReactions = COPY(this.reactionsGroups[key].reactions);
    }
  }

  copyParsed() {
    this.copied = false;
    parser(this.importedFileContent);
    this.copied = true;
  }

  clear() {
    this.importedFileName = '';
    this.importedFileContent = '';
    this.fileLoaded = false;
    this.copied = false;
  }

  onSelected(event: any) {
    const file: File = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onloadstart = () => {
      this.fileLoaded = false;
    };
    fileReader.onloadend = (data: any) => {
      this.importedFileContent = data.target.result;
      this.fileLoaded = true;
    }
    fileReader.readAsText(file);
  }

  selectRecipe(item: IReaction) {
    this.selectedReaction = item;
    this.selectedTree = [];
    this.selectedTree.push(item);
    this.recTree(item);
  }

  private recTree(item: IReaction) {
    for (const react of Object.keys(item.reactants)) {
      if (!this.basicReagents.includes(react.toLowerCase())) {
        item.reactants[react].isSimple = false;
        item.reactants[react].isRecipe = false;
        let newItem: IReaction | undefined;
        for (const key of Object.keys(reaGroups)) {
          const subKey: keyof typeof reaGroups = key as keyof typeof reaGroups;
          newItem = this.reactionsGroups[subKey].reactions
            .find((item: IReaction) => item.id.toLowerCase() === react.toLowerCase());
          if (newItem) break;
        }
        if (newItem) {
          item.reactants[react].isRecipe = true;
          this.selectedTree.push(newItem);
          this.recTree(newItem);
        }
      } else {
        item.reactants[react].isSimple = true;
      }
    }
  }

  uniFilter(groupName: string) {
    if (!this.reactionsGroups[groupName].search.length) {
      this.reactionsGroups[groupName].filteredReactions = COPY(this.reactionsGroups[groupName].reactions);
      return;
    }
    this.reactionsGroups[groupName].filteredReactions = [];
    this.reactionsGroups[groupName].reactions.forEach((value: IReaction) => {
      if (value.id.toLowerCase().includes(this.reactionsGroups[groupName].search.toLowerCase())) {
        this.reactionsGroups[groupName].filteredReactions.push(value);
      }
    });
  }

  uniMap(array: IReaction[]): IReaction[] {
    return array.map((item: IReaction) => {
        const subItem: IReaction = COPY(item);
        subItem.isSimple = true;
        for (const react of Object.keys(subItem.reactants)) {
          if (!this.basicReagents.includes(react.toLowerCase())) {
            subItem.isSimple = false;
            break;
          }
        }
        const subId: string = subItem.id.substring(1);
        if (subId !== subId.toLowerCase()) {
          let tempId: string = '';
          for (const char of subId) {
            if (char.toLowerCase() !== char) {
              tempId += ' ';
            }
            tempId += char;
          }
          subItem.name = subItem.id[0] + tempId;
        } else {
          subItem.name = subItem.id;
        }
        return subItem;
    });
  }

  uniSort(array: IReaction[]): IReaction[] {
    return array.sort((a: IReaction, b: IReaction) => {
      if (a.prioritised && b.prioritised) {
        if ( a.id < b.id ){
          return -1;
        }
        if ( a.id > b.id ){
          return 1;
        }
      }
      if (a.prioritised) return -1;
      if (b.prioritised) return 1;
      if ( a.id < b.id ){
        return -1;
      }
      if ( a.id > b.id ){
        return 1;
      }
      return 0;
    })
  }

  protected readonly Object = Object;
}
