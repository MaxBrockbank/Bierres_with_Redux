import masterBeerList from './../../Reducers/master-beer-list-reducer';

describe('master beer list reducer', () => {

let action;
const newBeer = {
  name: "Czech Pilsner",
  brand: "Buoy",
  price: 4.99,
  ABV: 6.2,
  quantity: 9,
  id: 0
}
const currentState = {
  0:{
    name: "Czech Pilsner",
    brand: "Buoy",
    price: 4.99,
    ABV: 6.2,
    quantity: 9,
    id: 0
  },
  1:{
    name: "Hazy Lil' Thing ",
    brand: "Sierra Nevada",
    price: 5.99,
    ABV: 5.1,
    quantity: 20,
    id: 1
  }
}

  it('will return default value of empty object if action type is null', () => {
    expect(masterBeerList({}, {type:null})).toEqual({});
  })

  it('will add new beer to state object with when type is ADD_BEER', ()=>{
    const {name, brand, price, ABV, quantity, id} = newBeer;
    action = {
      type: 'ADD_BEER',
      name: name,
      brand: brand, 
      price: price,
      ABV: ABV,
      quantity: quantity, 
      id: id
    }
    expect(masterBeerList({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand, 
        price: price,
        ABV: ABV,
        quantity: quantity, 
        id: id
      }
    })
  })

  it('will delete beer from state object when type is DELETE_BEER',()=>{
    action = {
      type:'DELETE_BEER',
      id: 0
    }
    expect(masterBeerList(currentState, action)).toEqual({
      1:{
        name: "Hazy Lil' Thing ",
        brand: "Sierra Nevada",
        price: 5.99,
        ABV: 5.1,
        quantity: 20,
        id: 1
      }
    })
  })
})