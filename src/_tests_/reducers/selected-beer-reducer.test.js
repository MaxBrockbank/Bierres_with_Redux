import selectedBeer from './../../Reducers/selected-beer-reducer';

describe('selected beer reducer', ()=>{
  it('return default value of null when action type is not specified', ()=>{
    expect(selectedBeer(null, {type:null})).toEqual(null);
  })
})