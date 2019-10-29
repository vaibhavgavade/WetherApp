import {combineReducers} from 'redux';
import {testReducer} from './testReducer';
import {reducer} from './CounterReducer';
import {LoaderReducer} from './LoderReducer';
import {SearchReducer} from './SearchReducer';
import {UpdateInfoReducer} from './UpdateInfoReducer';
import {ThemeReducer} from './ThemeReducer';
import {DateReducer} from './DateReducer';
import {AccentColorReducer} from './AccentColorReducer';
const rootReducer = combineReducers({
  data: reducer,
  loaderRe: LoaderReducer,
  search: SearchReducer,
  update: UpdateInfoReducer,
  myTheme: ThemeReducer,
  dateRe: DateReducer,
  testRe: testReducer,
  accent: AccentColorReducer,
});
export {rootReducer};
