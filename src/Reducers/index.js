import formVisibleReducer from './form-visible-reducer';
import editingReducer from './editing-reducer';
import selectedBeerReducer from './selected-beer-reducer';
import masterBeerListReducer from './master-beer-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  editing: editingReducer,
  selectedBeer: selectedBeerReducer,
  masterBeerList: masterBeerListReducer
});

export default rootReducer;