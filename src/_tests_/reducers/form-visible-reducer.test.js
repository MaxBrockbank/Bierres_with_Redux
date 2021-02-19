import formVisible from './../../Reducers/form-visible-reducer';

describe('form visible reducer', () => {
  it('make sure default return is false', ()=>{
    expect(formVisible()).toEqual(false);
  })
})