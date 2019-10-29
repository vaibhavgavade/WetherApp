import {SET_THEME} from '../../actions/Types';

const INITIAL_STATE = {
  theme: '#87ceeb',
  textColor:'#000000'//black
};
export const ThemeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: (state.theme=action.payload.theme),
        textColor:(state.textColor=action.payload.textColor)
        
      };
    }
    default: {
      return state;
    }
  }
};