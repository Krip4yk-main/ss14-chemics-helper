import {Component, OnInit} from '@angular/core';
import {COPY, parser} from "../app.helper";
import {emptyReactionGroup, IReactionGroups} from "../shared/shared.types";
import {HttpClient} from "@angular/common/http";
import {CoreStorage} from "../core/core.storage";
import {IAvailable, IReaction} from "../core/services/space-wizards/space-wizards.types";
import {CoreEmpty} from "../core/core.empty";

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

  selectedReactionType: IAvailable = this.empty.getEmpty("available");
  selectedTree: IReaction[] = [];


  constructor(
    public storage: CoreStorage,
    public empty: CoreEmpty,
  ) {
  }

  ngOnInit(): void {
  }

  ddChange(event: any) {
    this.selectedReactionType = event;
    console.log(this.selectedReactionType);
  }
}
