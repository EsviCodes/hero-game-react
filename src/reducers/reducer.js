const initialState = {
  name: "Batman",
  health: 5,
  inventory: [],
  heroic: true,
  weapon: {
    type: "Battarang",
    damage: 3
  }
};

const heroBatman = (state = initialState, action = {}) => {
  switch (action.type) {
    case "REST":
      return {
        ...state,
        health: 10
      };
    case "PICKUP_STUN_GRENEDE":
      return {
        ...state,
        inventory: [...state.inventory, action.payload]
      };
    case "PICKUP_BATTARANG":
      return {
        ...state,
        inventory: [...state.inventory, action.payload]
      };
    default:
      return state;
  }
};

export default heroBatman;
