import {IReaction} from "../../app/shared/shared.types";

export default [
  {
    type: 'reaction',
    id: 'Ammonia',
    reactants:
      {
        Hydrogen:
          {
            amount: 3,
          },
        Nitrogen:
          {
            amount: 1,
          },
      },
    products:
      {
        Ammonia: 4,
      },
  },
  {
    type: 'reaction',
    id: 'Diethylamine',
    reactants:
      {
        Ammonia:
          {
            amount: 1,
          },
        Ethanol:
          {
            amount: 1,
          },
      },
    products:
      {
        Diethylamine: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Phenol',
    reactants:
      {
        Oxygen:
          {
            amount: 1,
          },
        Hydrogen:
          {
            amount: 1,
          },
        Carbon:
          {
            amount: 1,
          },
      },
    products:
      {
        Phenol: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Acetone',
    reactants:
      {
        Oil:
          {
            amount: 1,
          },
        WeldingFuel:
          {
            amount: 1,
          },
        Oxygen:
          {
            amount: 1,
          },
      },
    products:
      {
        Acetone: 2,
      },
  },
  {
    type: 'reaction',
    id: 'FoamingAgent',
    reactants:
      {
        Lithium:
          {
            amount: 1,
          },
        Hydrogen:
          {
            amount: 1,
          },
      },
    products:
      {
        FoamingAgent: 2,
      },
  },
  {
    type: 'reaction',
    id: 'PolytrinicAcid',
    reactants:
      {
        SulfuricAcid:
          {
            amount: 1,
          },
        Plasma:
          {
            amount: 1,
          },
        Potassium:
          {
            amount: 1,
          },
      },
    products:
      {
        PolytrinicAcid: 3,
      },
  },
  {
    type: 'reaction',
    id: 'SulfuricAcid',
    reactants:
      {
        Hydrogen:
          {
            amount: 1,
          },
        Sulfur:
          {
            amount: 1,
          },
        Oxygen:
          {
            amount: 2,
          },
      },
    products:
      {
        SulfuricAcid: 3,
      },
  },
  {
    type: 'reaction',
    id: 'FluorosulfuricAcid',
    reactants:
      {
        Fluorine:
          {
            amount: 1,
          },
        Hydrogen:
          {
            amount: 1,
          },
        Potassium:
          {
            amount: 1,
          },
        SulfuricAcid:
          {
            amount: 1,
          },
      },
    products:
      {
        FluorosulfuricAcid: 4,
      },
  },
  {
    type: 'reaction',
    id: 'PotassiumExplosion',
    impact: 'High',
    priority: 20,
    reactants:
      {
        Water:
          {
            amount: 1,
          },
        Potassium:
          {
            amount: 1,
          },
      },
    effects:
      {
        type: 'ExplosionReactionEffect',
        explosionType: 'Default',
        maxIntensity: 5,
        intensityPerUnit: 0.5, // 50+50 reagent for maximum explosion
        intensitySlope: .5,
        maxTotalIntensity: 30,
      },
  },
  {
    type: 'reaction',
    id: 'Smoke',
    priority: 10,
    impact: 'High',
    reactants:
      {
        Phosphorus:
          {
            amount: 1,
          },
        Potassium:
          {
            amount: 1,
          },
        Sugar:
          {
            amount: 1,
          },
      },
    effects:
      {
        type: 'AreaReactionEffect',
        duration: 10,
        prototypeId: 'Smoke',
        sound:
          {
            path: '/Audio/Effects/smoke.ogg',
          },
      },
  },
  {
    type: 'reaction',
    id: 'Foam',
    priority: 10,
    impact: 'High',
    reactants:
      {
        Fluorosurfactant:
          {
            amount: 1,
          },
        Water:
          {
            amount: 1,
          },
      },
    effects:
      {
        type: 'AreaReactionEffect',
        duration: 10,
        prototypeId: 'Foam',
        sound:
          {
            path: '/Audio/Effects/extinguish.ogg',
          },
      },
  },
  {
    type: 'reaction',
    id: 'IronMetalFoam',
    impact: 'High',
    priority: 10,
    reactants:
      {
        Iron:
          {
            amount: 3,
          },
        FoamingAgent:
          {
            amount: 1,
          },
        FluorosulfuricAcid:
          {
            amount: 1,
          },
      },
    effects:
      {
        type: 'AreaReactionEffect',
        duration: 10,
        prototypeId: 'IronMetalFoam',
        sound:
          {
            path: '/Audio/Effects/extinguish.ogg',
          },
      },
  },
  {
    type: 'reaction',
    id: 'AluminiumMetalFoam',
    impact: 'High',
    priority: 10,
    reactants:
      {
        Aluminium:
          {
            amount: 3,
          },
        FoamingAgent:
          {
            amount: 1,
          },
        FluorosulfuricAcid:
          {
            amount: 1,
          },
      },
    effects:
      {
        type: 'AreaReactionEffect',
        duration: 10,
        prototypeId: 'AluminiumMetalFoam',
        sound:
          {
            path: '/Audio/Effects/extinguish.ogg',
          },
      },
  },
  {
    type: 'reaction',
    id: 'UraniumEmpExplosion',
    impact: 'High',
    priority: 20,
    reactants:
      {
        Iron:
          {
            amount: 1,
          },
        Uranium:
          {
            amount: 1,
          },
        Aluminium:
          {
            amount: 1,
          },
      },
    effects:
      {
        type: 'EmpReactionEffect',
        rangePerUnit: 0.2,
        maxRange: 6,
        energyConsumption: 12500,
        duration: 15,
      },
  },
  {
    type: 'reaction',
    id: 'TableSalt',
    reactants:
      {
        Chlorine:
          {
            amount: 1,
          },
        Sodium:
          {
            amount: 1,
          },
      },
    products:
      {
        TableSalt: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Thermite',
    impact: 'Medium',
    reactants:
      {
        Iron:
          {
            amount: 1,
          },
        Aluminium:
          {
            amount: 1,
          },
        Oxygen:
          {
            amount: 1,
          },
      },
    products:
      {
        Thermite: 3,
      },
  },
  {
    type: 'reaction',
    id: 'UnstableMutagen',
    reactants:
      {
        Radium:
          {
            amount: 1,
          },
        Phosphorus:
          {
            amount: 1,
          },
        Chlorine:
          {
            amount: 1,
          },
      },
    products:
      {
        UnstableMutagen: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Oil',
    reactants:
      {
        WeldingFuel:
          {
            amount: 1,
          },
        Carbon:
          {
            amount: 1,
          },
        Hydrogen:
          {
            amount: 1,
          },
      },
    products:
      {
        Oil: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Fluorosurfactant',
    impact: 'Medium',
    reactants:
      {
        Carbon:
          {
            amount: 2,
          },
        Fluorine:
          {
            amount: 2,
          },
        SulfuricAcid:
          {
            amount: 1,
          },
      },
    products:
      {
        Fluorosurfactant: 5,
      },
  },
  {
    type: 'reaction',
    id: 'Desoxyephedrine',
    impact: 'Medium',
    minTemp: 370,
    reactants:
      {
        Ephedrine:
          {
            amount: 1,
          },
        Carbon:
          {
            amount: 1,
          },
        Iodine:
          {
            amount: 1,
          },
        Phosphorus:
          {
            amount: 1,
          },
      },
    products:
      {
        Desoxyephedrine: 4, //I kinda remember having to heat this up, and if you heated it up too much, it went boom, I can't remember the specific values tho.
      },
  },
  {
    type: 'reaction',
    id: 'Ephedrine',
    impact: 'Medium',
    reactants:
      {
        Oil:
          {
            amount: 1,
          },
        Hydrogen:
          {
            amount: 1,
          },
        Sugar:
          {
            amount: 1,
          },
        Diethylamine:
          {
            amount: 1,
          },
      },
    products:
      {
        Ephedrine: 4,
      },
  },
  {
    type: 'reaction',
    id: 'MuteToxin',
    impact: 'Medium',
    reactants:
      {
        Uranium:
          {
            amount: 2,
          },
        Water:
          {
            amount: 1,
          },
        Carbon:
          {
            amount: 1,
          },
      },
    products:
      {
        MuteToxin: 2,
      },
  },
  {
    type: 'reaction',
    id: 'ChloralHydrate',
    impact: 'Medium',
    prioritised: true,
    reactants:
      {
        Chlorine:
          {
            amount: 3,
          },
        Ethanol:
          {
            amount: 1,
          },
        Water:
          {
            amount: 1,
          },
      },
    products:
      {
        ChloralHydrate: 1,
      },
  },
  {
    type: 'reaction',
    id: 'Pax',
    impact: 'Medium',
    reactants:
      {
        MindbreakerToxin:
          {
            amount: 1,
          },
        Synaptizine:
          {
            amount: 1,
          },
        Water:
          {
            amount: 1,
          },
      },
    products:
      {
        Pax: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Charcoal',
    reactants:
      {
        Carbon:
          {
            amount: 1,
          },
        Ash:
          {
            amount: 1,
          },
      },
    products:
      {
        Charcoal: 1,
      },
  },
  {
    type: 'reaction',
    id: 'NorepinephricAcid',
    impact: 'Medium',
    reactants:
      {
        Uranium:
          {
            amount: 2,
          },
        Hydrogen:
          {
            amount: 1,
          },
        Oxygen:
          {
            amount: 1,
          },
      },
    products:
      {
        NorepinephricAcid: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Ethyloxyephedrine',
    impact: 'Medium',
    reactants:
      {
        Desoxyephedrine:
          {
            amount: 1,
          },
        Stellibinin:
          {
            amount: 1,
          },
      },
    products:
      {
        Ethyloxyephedrine: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Diphenylmethylamine',
    impact: 'Medium',
    reactants:
      {
        Ethyloxyephedrine:
          {
            amount: 1,
          },
        SodiumCarbonate:
          {
            amount: 1,
          },
        Coffee:
          {
            amount: 1,
          },
      },
    products:
      {
        Diphenylmethylamine: 3,
      },
  },
  {
    type: 'reaction',
    id: 'SodiumCarbonate',
    impact: 'Medium',
    reactants:
      {
        Ammonia:
          {
            amount: 1,
          },
        TableSalt:
          {
            amount: 1,
          },
        Carbon:
          {
            amount: 1,
          },
        Oxygen:
          {
            amount: 1,
          },
      },
    products:
      {
        SodiumCarbonate: 4,
      },
  },
  {
    type: 'reaction',
    id: 'Bleach',
    reactants:
      {
        TableSalt:
          {
            amount: 2,
          },
        SpaceCleaner:
          {
            amount: 2,
          },
        Oxygen:
          {
            amount: 1,
          },
      },
    products:
      {
        Bleach: 5,
      },
  },
  {
    type: 'reaction',
    id: 'SpaceCleaner',
    prioritised: true,
    reactants:
      {
        Ammonia:
          {
            amount: 1,
          },
        Water:
          {
            amount: 1,
          },
      },
    products:
      {
        SpaceCleaner: 2,
      },
  },
  {
    type: 'reaction',
    id: 'SpaceLube',
    impact: 'Medium',
    reactants:
      {
        Water:
          {
            amount: 1,
          },
        Silicon:
          {
            amount: 1,
          },
        Oxygen:
          {
            amount: 1,
          },
      },
    products:
      {
        SpaceLube: 5,
      },
  },
] as IReaction[];
