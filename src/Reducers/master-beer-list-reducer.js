export default (state={}, action) => {
  const {name, brand, price, ABV, quantity, id} = action;
  switch(action.type){
    case 'ADD_BEER':
      return Object.assign({},state,{
        [id]:{
        name: name,
        brand: brand, 
        price: price,
        ABV: ABV,
        quantity: quantity, 
        id: id
        }
      })
    case 'DELETE_BEER':
      let newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
}