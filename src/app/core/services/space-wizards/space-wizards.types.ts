export interface IAvailable {
  label: string;
  name: string;
  filter: string;
  looked: boolean;
  content: IReaction[];
}

export interface IReaction {
  id: string;
  products: IProduct;
  type: string;

  // optional fields
  effects?: any[];
  impact?: string;
  priority?: number;
  minTemp?: number;
  solids?: number;
  reactants?: IReactant;

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
    hasRecipe?: boolean;
  },
}
