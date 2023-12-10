export interface IAvailable {
  label: string;
  content: IReaction[];
}

export interface IReaction {
  id: string;
  products: IProduct;
  reactants: IReactant;
  type: string;

  // optional fields
  effects?: any[];
  impact?: string;
  priority?: number;
  minTemp?: number;

  // additional fields
  prioritised?: boolean;
  name?: string;
  isSimple?: boolean;
}

export interface IProduct {
  [product: string]: number,
}

export interface IReactant {
  [reactant: string]: {
    amount: number,
    catalyst?: boolean;

    // additional fields
    isSimple?: boolean;
    isRecipe?: boolean;
  },
}
