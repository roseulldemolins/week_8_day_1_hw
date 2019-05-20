const reducer1 = (action, state) => {
  return state + 1;
}

//Pure

const reducer2 = (action, state) => {
  state.push("Cat");
  return state;
}

//Not pure because of push function should be ...state

const reducer3 = (action, state) => {
  return [...state, "Dog"];
}

//Pure

const reducer4 = (action, state) => {
  return state.map(pet => {
    pet.price /= 2;
    return pet;
  });
}

//Not pure because of the map on state

const reducer5 = (action, state) => {
  return state.map(pet => {
    return { ...pet, pet.price: pet.price / 2 }
  });
}

//Not pure because of the map on state
