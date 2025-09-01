export interface BeastContent {
  title: string;
  description: string;
  image: string;
  nationKey: string;
}

export const daniel7BeastsContent: Record<string, BeastContent> = {
  lion: {
    title: "daniel.chapter7.beasts.lion.title",
    description: "daniel.chapter7.beasts.lion.description",
    image: "/assets/images/lion.png",
    nationKey: "daniel.chapter7.beasts.lion.nation",
  },
  bear: {
    title: "daniel.chapter7.beasts.bear.title",
    description: "daniel.chapter7.beasts.bear.description",
    image: "/assets/images/oso.png",
    nationKey: "daniel.chapter7.beasts.bear.nation",
  },
  leopard: {
    title: "daniel.chapter7.beasts.leopard.title",
    description: "daniel.chapter7.beasts.leopard.description",
    image: "/assets/images/leopardo.png",
    nationKey: "daniel.chapter7.beasts.leopard.nation",
  },
  dreadfulBeast: {
    title: "daniel.chapter7.beasts.dreadfulBeast.title",
    description: "daniel.chapter7.beasts.dreadfulBeast.description",
    image: "/assets/images/bestia.jpeg",
    nationKey: "daniel.chapter7.beasts.dreadfulBeast.nation",
  },
  littleHorn: {
    title: "daniel.chapter7.beasts.littleHorn.title",
    description: "daniel.chapter7.beasts.littleHorn.description",
    image: "/assets/images/cuerno.jpeg",
    nationKey: "daniel.chapter7.beasts.littleHorn.nation",
  },
};
