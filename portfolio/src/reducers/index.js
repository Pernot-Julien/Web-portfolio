import { CHANGE_DISPLAY_MENU} from '../actions/index';

const initialState = {
 displayBurger: false,
 refresh: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DISPLAY_MENU:
      return {
        ...state,
        displayBurger: !state.displayBurger,
      };
    default:
      return state;
  }
};

export default reducer;
