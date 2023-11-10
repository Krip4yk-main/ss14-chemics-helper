export interface IReaction {
  type: string;
  id: string;
  impact?: string;
  priority?: number;
  minTemp?: number;
  // next-only additional field
  name?: string;
  // next-only additional field
  isSimple?: boolean;
  reactants: {
    [reagent: string]: {
      amount: number;
      catalyst?: boolean;
      // next-only additional field
      isSimple?: boolean;
      // next-only additional field
      isRecipe?: boolean;
    }
  };
  products?: {
    [product: string]: number;
  };
  effects?: {
    type: string;
    // explosion group
    explosionType?: string
    maxIntensity?: number
    intensityPerUnit?: number;
    intensitySlope?: number;
    maxTotalIntensity?: number;
    // area group
    duration?: number; // emp also
    prototypeId?: string;
    sound?: {
      path: string;
    }
    // emp group (duration also here)
    rangePerUnit?: number,
    maxRange?: number,
    energyConsumption?: number,
  };
}
