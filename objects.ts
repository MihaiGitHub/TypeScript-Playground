const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring age from profile; have to say what age is inside profile when doing that
const { age }: { age: number } = profile;

// look at coords property and pull out lat, lng from the profile object : then describe the lat, lng structure inside the profile object
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
