import formVisible from './../../Reducers/form-visible-reducer';

describe('form visible reducer', () => {

  let action;

  it('make sure default return is false', ()=>{
    expect(formVisible(false, {type:null})).toEqual(false);
  })

  it('will toggle to true when passed an action of TOGGLE_FORM', ()=>{
    action = {
      type: 'TOGGLE_FORM'
    }
    expect(formVisible(false, action)).toEqual(true);
  })
})