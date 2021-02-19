import rootReducer from './../../Reducers/index';

describe('index reducer', ()=> {
  it('will return default values of all reducers if no action is specified', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      formVisible: false,
      editing: false,
      selectedBeer: null,
      masterBeerList: {}
    })
  })
})