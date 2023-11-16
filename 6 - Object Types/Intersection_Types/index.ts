interface Character {
  name: string;
}
interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const theRock: HumanWithGun = {
  name: "The Rock",
  type: "MiniGun",
  caliber: 20,
};

console.log(theRock)