export interface KingdomContent {
  title: string;
  history: string[];
  verses: string[];
  prophecy: string[];
  symbols: string[];
}

export const Content: Record<string, KingdomContent> = {
  babylon: {
    title: "daniel.chapter2.kingdoms.babylon.title",
    history: [
      "daniel.chapter2.kingdoms.babylon.history.p1",
      "daniel.chapter2.kingdoms.babylon.history.p2",
    ],
    verses: ["Daniel 2:36-38"],
    prophecy: [
      "daniel.chapter2.kingdoms.babylon.prophecy.p1",
      "daniel.chapter2.kingdoms.babylon.prophecy.p2",
    ],
    symbols: ["daniel.chapter2.kingdoms.babylon.symbols.p1"],
  },
  medoPersia: {
    title: "daniel.chapter2.kingdoms.medoPersia.title",
    history: [
      "daniel.chapter2.kingdoms.medoPersia.history.p1",
      "daniel.chapter2.kingdoms.medoPersia.history.p2",
    ],
    verses: ["Daniel 2:39"],
    prophecy: ["daniel.chapter2.kingdoms.medoPersia.prophecy.p1"],
    symbols: ["daniel.chapter2.kingdoms.medoPersia.symbols.p1"],
  },
  greece: {
    title: "daniel.chapter2.kingdoms.greece.title",
    history: [
      "daniel.chapter2.kingdoms.greece.history.p1",
      "daniel.chapter2.kingdoms.greece.history.p2",
    ],
    verses: ["Daniel 2:39"],
    prophecy: ["daniel.chapter2.kingdoms.greece.prophecy.p1"],
    symbols: ["daniel.chapter2.kingdoms.greece.symbols.p1"],
  },
  rome: {
    title: "daniel.chapter2.kingdoms.rome.title",
    history: [
      "daniel.chapter2.kingdoms.rome.history.p1",
      "daniel.chapter2.kingdoms.rome.history.p2",
    ],
    verses: ["Daniel 2:40"],
    prophecy: ["daniel.chapter2.kingdoms.rome.prophecy.p1"],
    symbols: ["daniel.chapter2.kingdoms.rome.symbols.p1"],
  },
  dividedKingdom: {
    title: "daniel.chapter2.kingdoms.dividedKingdom.title",
    history: [
      "daniel.chapter2.kingdoms.dividedKingdom.history.p1",
      "daniel.chapter2.kingdoms.dividedKingdom.history.p2",
    ],
    verses: ["Daniel 2:41-43"],
    prophecy: ["daniel.chapter2.kingdoms.dividedKingdom.prophecy.p1"],
    symbols: ["daniel.chapter2.kingdoms.dividedKingdom.symbols.p1"],
  },
  heavenKingdom: {
    title: "daniel.chapter2.kingdoms.heavenKingdom.title",
    history: [
      "daniel.chapter2.kingdoms.heavenKingdom.history.p1",
      "daniel.chapter2.kingdoms.heavenKingdom.history.p2",
    ],
    verses: ["Daniel 2:44-45"],
    prophecy: ["daniel.chapter2.kingdoms.heavenKingdom.prophecy.p1"],
    symbols: ["daniel.chapter2.kingdoms.heavenKingdom.symbols.p1"],
  },
};
