const temp: any = [
  {
    type: 'reaction',
    id: 'Dylovene',
    reactants:
      {
        Silicon:
          {
            amount: 1,
          },
        Nitrogen:
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
        Dylovene: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Ethylredoxrazine',
    reactants:
      {
        Oxygen:
          {
            amount: 1,
          },
        Dylovene:
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
        Ethylredoxrazine: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Cryptobiolin',
    reactants:
      {
        Potassium:
          {
            amount: 1,
          },
        Oxygen:
          {
            amount: 1,
          },
        Sugar:
          {
            amount: 1,
          },
      },
    products:
      {
        Cryptobiolin: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Arithrazine',
    reactants:
      {
        Hyronalin:
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
        Arithrazine: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Bicaridine',
    reactants:
      {
        Inaprovaline:
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
        Bicaridine: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Cryoxadone',
    reactants:
      {
        Dexalin:
          {
            amount: 1,
          },
        Water:
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
        Cryoxadone: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Doxarubixadone',
    reactants:
      {
        Cryoxadone:
          {
            amount: 1,
          },
        UnstableMutagen:
          {
            amount: 1,
          },
      },
    products:
      {
        Doxarubixadone: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Epinephrine',
    reactants:
      {
        Phenol:
          {
            amount: 1,
          },
        Acetone:
          {
            amount: 1,
          },
        Oxygen:
          {
            amount: 1,
          },
        Chlorine:
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
        Epinephrine: 5,
      },
  },
  {
    type: 'reaction',
    id: 'Dermaline',
    reactants:
      {
        Kelotane:
          {
            amount: 1,
          },
        Oxygen:
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
        Dermaline: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Dexalin',
    reactants:
      {
        Oxygen:
          {
            amount: 2,
          },
        Plasma:
          {
            amount: 1,
            catalyst: 'true',
          },
      },
    products:
      {
        Dexalin: 3,
      },
  },
  {
    type: 'reaction',
    id: 'DexalinPlus',
    reactants:
      {
        Dexalin:
          {
            amount: 1,
          },
        Carbon:
          {
            amount: 1,
          },
        Iron:
          {
            amount: 1,
          },
      },
    products:
      {
        DexalinPlus: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Hyronalin',
    reactants:
      {
        Radium:
          {
            amount: 1,
          },
        Dylovene:
          {
            amount: 1,
          },
      },
    products:
      {
        Hyronalin: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Inaprovaline',
    reactants:
      {
        Oxygen:
          {
            amount: 1,
          },
        Carbon:
          {
            amount: 1,
          },
        Sugar:
          {
            amount: 1,
          },
      },
    products:
      {
        Inaprovaline: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Ipecac',
    reactants:
      {
        Potassium:
          {
            amount: 1,
          },
        Nitrogen:
          {
            amount: 1,
          },
        Ammonia:
          {
            amount: 1,
          },
      },
    products:
      {
        Ipecac: 2,
      },
  },
  {
    type: 'reaction',
    id: 'TranexamicAcid',
    reactants:
      {
        Inaprovaline:
          {
            amount: 1,
          },
        SulfuricAcid:
          {
            amount: 1,
          },
        Sugar:
          {
            amount: 1,
          },
      },
    products:
      {
        TranexamicAcid: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Kelotane',
    reactants:
      {
        Silicon:
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
        Kelotane: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Leporazine',
    reactants:
      {
        Silicon:
          {
            amount: 1,
          },
        Copper:
          {
            amount: 1,
          },
        Plasma:
          {
            amount: 1,
            catalyst: 'true',
          },
      },
    products:
      {
        Leporazine: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Phalanximine',
    reactants:
      {
        Hyronalin:
          {
            amount: 1,
          },
        Ethanol:
          {
            amount: 1,
          },
        UnstableMutagen:
          {
            amount: 1,
          },
      },
    products:
      {
        Phalanximine: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Ambuzol',
    reactants:
      {
        Dylovene:
          {
            amount: 1,
          },
        Ammonia:
          {
            amount: 1,
          },
        Blood:
          {
            amount: 2,
          },
      },
    products:
      {
        Ambuzol: 4,
      },
  },
  {
    type: 'reaction',
    id: 'AmbuzolPlus',
    reactants:
      {
        Ambuzol:
          {
            amount: 5,
          },
        ZombieBlood:
          {
            amount: 15,
          },
      },
    products:
      {
        Blood: 15,
        AmbuzolPlus: 5,
      },
  },
  {
    type: 'reaction',
    id: 'Synaptizine',
    reactants:
      {
        Lithium:
          {
            amount: 1,
          },
        Sugar:
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
        Synaptizine: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Tricordrazine',
    reactants:
      {
        Inaprovaline:
          {
            amount: 1,
          },
        Dylovene:
          {
            amount: 1,
          },
      },
    products:
      {
        Tricordrazine: 2,
      },
  },
  {
    type: 'reaction',
    id: 'HeartbreakerToxin',
    reactants:
      {
        DexalinPlus:
          {
            amount: 1,
          },
        MindbreakerToxin:
          {
            amount: 1,
          },
      },
    products:
      {
        HeartbreakerToxin: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Impedrezene',
    minTemp: 370,
    reactants:
      {
        Mercury:
          {
            amount: 1,
          },
        Oxygen:
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
        Impedrezene: 1,
      },
  },
  {
    type: 'reaction',
    id: 'Lexorin',
    impact: 'High',
    reactants:
      {
        HeartbreakerToxin:
          {
            amount: 1,
          },
        Plasma:
          {
            amount: 1,
          },
      },
    products:
      {
        Lexorin: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Lipozine',
    reactants:
      {
        TableSalt:
          {
            amount: 1,
          },
        Ethanol:
          {
            amount: 1,
          },
        Radium:
          {
            amount: 1,
          },
      },
    products:
      {
        Lipozine: 3,
      },
  },
  {
    type: 'reaction',
    id: 'MindbreakerToxin',
    minTemp: 370,
    reactants:
      {
        Silicon:
          {
            amount: 1,
          },
        Hydrogen:
          {
            amount: 1,
          },
        Dylovene:
          {
            amount: 1,
          },
      },
    products:
      {
        MindbreakerToxin: 3,
      },
  },
  {
    type: 'reaction',
    id: 'SpaceDrugs',
    reactants:
      {
        Mercury:
          {
            amount: 1,
          },
        Sugar:
          {
            amount: 1,
          },
        Lithium:
          {
            amount: 1,
          },
      },
    products:
      {
        SpaceDrugs: 3,
      },
  },
  {
    type: 'reaction',
    id: 'Ultravasculine',
    reactants:
      {
        Histamine:
          {
            amount: 2,
          },
        Plasma:
          {
            amount: 1,
            catalyst: 'true',
          },
      },
    products:
      {
        Ultravasculine: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Oculine',
    reactants:
      {
        TableSalt:
          {
            amount: 1,
          },
        Blood:
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
        Oculine: 4,
      },
  },
  {
    type: 'reaction',
    id: 'Siderlac',
    reactants:
      {
        Aloe:
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
        Siderlac: 2,
      },
  },
  {
    type: 'reaction',
    id: 'Cognizine',
    reactants:
      {
        CarpoToxin:
          {
            amount: 1,
          },
        Siderlac:
          {
            amount: 1,
          },
        Acetone:
          {
            amount: 1,
          },
      },
    products:
      {
        Cognizine: 1,
      },
  },
  {
    type: 'reaction',
    id: 'Sigynate',
    impact: 'Medium',
    minTemp: 370,
    reactants:
      {
        SodiumCarbonate:
          {
            amount: 1,
          },
        Kelotane:
          {
            amount: 1,
          },
        Water:
          {
            amount: 1,
          },
        Sugar:
          {
            amount: 1,
          },
      },
    products:
      {
        Sigynate: 4,
      },
  },
  {
    type: 'reaction',
    id: 'Saline',
    reactants:
      {
        Water:
          {
            amount: 4,
          },
        TableSalt:
          {
            amount: 1,
          },
      },
    products:
      {
        Saline: 5,
      },
  },
]
