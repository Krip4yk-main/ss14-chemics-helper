import {IReaction} from "../core/services/space-wizards/space-wizards.types";

export interface IReactionGroups {
  [group: string]: IReactionGroup;
}

export interface IReactionGroup {
  reactions: IReaction[];
  filteredReactions: IReaction[];
  search: string;
}

export const emptyReactionGroup: IReactionGroup = {
  reactions: [],
  filteredReactions: [],
  search: '',
}
