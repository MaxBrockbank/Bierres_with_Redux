export default (state=null, action) => {
  const { name, brand, price, ABV, quantity, id } = action;
  switch(action.type){
    case 'NEW_SELECT':
      return {
        name: name,
        brand: brand,
        price: price,
        ABV:ABV,
        quantity:quantity,
        id:id
      }
    case 'CLEAR_SELECT':
      return null;
    default:
      return state;
  }
}