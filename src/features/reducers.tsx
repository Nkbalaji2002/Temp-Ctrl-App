export interface TempState {
  Temp: number;
}

const initialState: TempState = {
  Temp: 20,
};

const TempReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT_Temperature":
      return {
        ...state,
        Temp: state.Temp + 1,
      };

    case "DECREMENT_Temperature":
      return {
        ...state,
        Temp: state.Temp - 1,
      };

    default:
      return state;
  }
};

export default TempReducer;
