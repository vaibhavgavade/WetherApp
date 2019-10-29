import {ACCENT_COLOR_CHANGE} from '../../actions/Types';

const INITIAL_STATE = {
  AccentC: '#ff4500',
};
export const AccentColorReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case ACCENT_COLOR_CHANGE: {
      return {
        ...state,
        AccentC: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
