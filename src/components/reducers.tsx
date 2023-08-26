export interface AppState {
  message: string;
}

const initialState: AppState = {
  message: "Hello, Redux!",
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
