import masterBeerList from './../../Reducers/master-beer-list-reducer';

describe('master beer list reducer', () => {
  it('will return default value of empty object if action type is null', () => {
    expect(masterBeerList({}, {type:null})).toEqual({});
  })
})