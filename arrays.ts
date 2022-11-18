const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["F150"], ["Corolla"], ["Camaro"]];

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types in arrays is possible; array with date or string
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
