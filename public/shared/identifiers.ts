export enum StatueIdentifiers {
  Babylon = "Babylon",
  MedoPersia = "Medo Persia",
  Greece = "Greece",
  Rome = "Rome",
  DividedKingdom = "Divided Kingdom",
  HeavenKingdom = "Kingdom of heaven",
}

export enum ChurchesIdentifiers {
  Ephesus = "Ephesus",
  Smyrna = "Smyrna",
  Pergamum = "Pergamum",
  Thyatira = "Thyatira",
  Sardis = "Sardis",
  Philadelphia = "Philadelphia",
  Laodicea = "Laodicea",
}

export type Identifiers = ChurchesIdentifiers | StatueIdentifiers | string[];
