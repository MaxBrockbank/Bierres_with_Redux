import editing from './../../Reducers/editing-reducer';

describe('editing reducer', ()=>{

  it('will return default if no action type is specified', () => {
    expect(editing(false, {type:null})).toEqual(false);
  })

  it('will return the opposite of the current state value if action type is TOGGLE_EDIT', () => {
    expect(editing(false, {type:'TOGGLE_EDIT'})).toEqual(true);
  })
})