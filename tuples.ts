const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// tuples have an assumption about the order of the elements
// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const tea: Drink = ["clear", false, 0];
