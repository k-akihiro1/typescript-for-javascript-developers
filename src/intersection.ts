export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

// type TeoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;

type TeoWayPlayer = Pitcher1 & Batter1;

const OotaniShouhei: TeoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
