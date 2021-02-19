import React from 'react';
import BeerDetails from './BeerDetails';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';
import EditBeerForm from './EditBeerForm';
import './../App.css';
import { v4 } from 'uuid'

class Control extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formVisible: false,
      masterBeerList:[
        {
          name: "Czech Pilsner",
          brand: "Buoy",
          price: 4.99,
          ABV: 6.2,
          quantity: 9,
          id: v4()
        },
        {
          name: "Hazy Lil' Thing ",
          brand: "Sierra Nevada",
          price: 5.99,
          ABV: 5.1,
          quantity: 20,
          id: v4()
        },
        {
          name: "Hefeweizen",
          brand: "Widmer Brothers",
          price: 6.99,
          ABV: 6.0,
          quantity: 3,
          id: v4()
        },
        {
          name: "Corona",
          brand: "Cervecería Modelo",
          price: 4.99,
          ABV: 4.6,
          quantity: 8,
          id: v4()
        },
        {
          name: "Classic Beer",
          brand: "Good Beer Co.",
          price: 10.99,
          ABV: 8.2,
          quantity: 124,
          id: v4()
        }
      ],
      selectedBeer:null,
      editing: false
    }
  }

  handleClick = () => {
    if(this.state.selectedBeer != null){
      this.setState({
        formVisible: false,
        selectedBeer: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddNewBeerToList = (newBeer) => {
    const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newMasterBeerList,
      formVisible: false
    })
  }

  handleRestockBeer= (id, restockAmount) => {
    let newMasterBeerList = this.state.masterBeerList;
    if(restockAmount > 0){
      newMasterBeerList = this.state.masterBeerList.map(beer=> ({
        ...beer,
        quantity: beer.id === id ? beer.quantity + restockAmount : beer.quantity
      }))
    }
    this.setState({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
  }

  handleBuyBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.map(beer => ({
      ...beer,
      quantity: beer.id === id ? beer.quantity -1: beer.quantity
    }))
    this.setState({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
    }


  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = this.state.masterBeerList
      .filter(beer => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
      masterBeerList: editedMasterBeerList,
      editing: false,
      selectedBeer: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
    this.setState({
      masterBeerList: newMasterBeerList,
      editing: false,
      selectedBeer:null
    })
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    this.setState({selectedBeer: selectedBeer});
  }

  render(){

    let buttonText = null;
    let currentComponent = null;

    if(this.state.editing){
      currentComponent = <EditBeerForm beer = {this.state.selectedBeer} onEditBeer={this.handleEditingBeerInList} />
      buttonText = "Return to beer list";
    } else if(this.state.selectedBeer !== null){
      currentComponent = <BeerDetails beer={this.state.selectedBeer} onClickingDelete = {this.handleDeletingBeer} onClickingEdit = {this.handleEditClick} onRestocking = {this.handleRestockBeer} onBuying = {this.handleBuyBeer} />
      buttonText = "Return to beer list"
    }else if(this.state.formVisible){
      currentComponent = <NewBeerForm onNewBeerCreation = {this.handleAddNewBeerToList}/>
      buttonText = "Return to beer list"
    } else {
      currentComponent = <BeerList beerList={this.state.masterBeerList} onBeerSelection={this.handleChangingSelectedBeer}/>
      buttonText = "Add new beer"
    }
    return(
      <React.Fragment>
        {currentComponent}
        <button onClick={this.handleClick} className="btn btn-info returnBut">{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default Control;