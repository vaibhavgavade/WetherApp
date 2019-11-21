import {DATE_CHANGE} from '../../actions/Types';
INITIAL_DATE = {
  lati: '37.8267',
  longi: '-122.4233',
  loca: 'Mumbai',
  date: '',
};
export const DateReducer = (state = INITIAL_DATE, action) => {
  console.log('date reducer action is', action.payload);
  switch (action.type) {
    case DATE_CHANGE: {
      return {
        ...state,
        lati: (state.lati = action.payload.lati),
        longi: (state.longi = action.payload.longi),
        loca: (state.loca = action.payload.loca),
        date: (state.date = action.payload.date),
      };
    }
    default: {
      return state;
    }
  }
};
