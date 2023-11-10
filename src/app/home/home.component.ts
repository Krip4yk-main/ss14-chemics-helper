import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {COPY, parser} from "../app.helper";
import {meds} from "../../assets/data/meds";
import {chems} from "../../assets/data/chems";
import {IReaction} from "../shared/shared.types";
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

  meds: IReaction[] = COPY(meds);
  filteredMeds: IReaction[] = [];
  filteredMedsInput: string = '';
  chems: IReaction[] = COPY(chems);
  filteredChems: IReaction[] = [];
  filteredChemsInput: string = '';
  basicReagents: string[] = COPY(basicReagents);

  selectedReaction: IReaction | undefined;
  selectedTree: IReaction[] = [];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.meds.forEach((item: IReaction) => {
      item.isSimple = true;
      for (const react of Object.keys(item.reactants)) {
        if (!this.basicReagents.includes(react.toLowerCase())) {
          item.isSimple = false;
          break;
        }
      }
      const subId: string = item.id.substring(1);
      if (subId !== subId.toLowerCase()) {
        let tempId: string = '';
        for (const char of subId) {
          if (char.toLowerCase() !== char) {
            tempId += ' ';
          }
          tempId += char;
        }
        item.name = item.id[0] + tempId;
      } else {
        item.name = item.id;
      }
    })
    this.filteredMeds = COPY(this.meds);
    this.chems.forEach((item: IReaction) => {
      item.isSimple = true;
      for (const react of Object.keys(item.reactants)) {
        if (!this.basicReagents.includes(react)) {
          item.isSimple = false;
          break;
        }
      }
      const subId: string = item.id.substring(1);
      if (subId !== subId.toLowerCase()) {
        let tempId: string = '';
        for (const char of subId) {
          if (char.toLowerCase() !== char) {
            tempId += ' ';
          }
          tempId += char;
        }
        item.name = item.id[0] + tempId;
      } else {
        item.name = item.id;
      }
    })
    this.filteredChems = COPY(this.chems);
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
        let newItem: IReaction | undefined =
          this.meds.find((item: IReaction) => item.id.toLowerCase() === react.toLowerCase());
        if (!newItem) {
          newItem = this.chems.find((item: IReaction) => item.id.toLowerCase() === react.toLowerCase());
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

  filterMeds() {
    if (!this.filteredMedsInput?.length) {
      this.filteredMeds = COPY(this.meds);
      return;
    }
    this.filteredMeds = [];
    this.meds.forEach((value: IReaction) => {
      if (value.id.toLowerCase().includes(this.filteredMedsInput.toLowerCase())) {
        this.filteredMeds.push(value);
      }
    });
  }

  filterChems() {
    if (!this.filteredChemsInput?.length) {
      this.filteredChems = COPY(this.chems);
      return;
    }
    this.filteredChems = [];
    this.chems.forEach((value: IReaction) => {
      if (value.id.toLowerCase().includes(this.filteredChemsInput.toLowerCase())) {
        this.filteredChems.push(value);
      }
    });
  }

  protected readonly Object = Object;
}
