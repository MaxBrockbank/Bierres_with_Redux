import React from 'react';
import BeerDetails from './BeerDetails';
import BeerList from './BeerList';
import NewBeerForm from './NewBeerForm';
import EditBeerForm from './EditBeerForm';
import './../App.css';
import * as a from './../Actions/index'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Control extends React.Component{
  handleClick = () => {
    const { dispatch } = this.props
    if(this.props.selectedBeer != null){
      if(this.props.formVisible){
        const action = a.toggleForm();
        dispatch(action);
      }
      const action2 = a.clearSelect();
      dispatch(action2); 
      if(this.props.editing){
        const action3 = a.toggleEdit
        dispatch(action3);
      }
    } else {
      const action2 = a.toggleForm();
      dispatch(action2);
    }
  }

  handleAddNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    let action = a.addBeer(newBeer);
    let action2 = a.toggleForm();
    dispatch(action);
    dispatch(action2);
  }

  handleRestockBeer= (id, restockAmount) => {
    const { dispatch } = this.props;
    if(restockAmount > 0){
        let beerToStock= Object.values(this.props.masterBeerList).filter(beer=> beer.id === id)[0];
        beerToStock.quantity = beerToStock.quantity + restockAmount;
        const action = a.addBeer(beerToStock)
        const action2 = a.clearSelect();
        dispatch(action);
        dispatch(action2);
    }
  }

  handleBuyBeer = (id) => {
    const { dispatch } = this.props;
      let beerToStock= Object.values(this.props.masterBeerList).filter(beer=> beer.id === id)[0];
      beerToStock.quantity = beerToStock.quantity - 1;
      const action = a.addBeer(beerToStock)
      const action2 = a.clearSelect();
      dispatch(action);
      dispatch(action2);
  }

  handleEditingBeerInList = (beerToEdit) => {
    const { dispatch } = this.props;
    const action = a.addBeer(beerToEdit);
    dispatch(action);
    const action2 = a.clearSelect();
    dispatch(action2);
    if(this.props.editing){
      const action3 = a.toggleEdit();
      dispatch(action3);
    }
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleDeletingBeer = (id) => {
    const { dispatch } = this.props; 
    const action = a.deleteBeer(id);
    const action2 = a.clearSelect();
    dispatch(action);
    dispatch(action2);
    if(this.props.editing){
      const action3 = a.toggleEdit();
      dispatch(action3);
    }
  }

  handleChangingSelectedBeer = (id) => {
    const { dispatch } = this.props;
    const selectedBeer = Object.values(this.props.masterBeerList).filter(beer => beer.id === id)[0];
    const action = a.newSelect(selectedBeer);
    dispatch(action);
  }

  render(){
    let buttonText = null;
    let currentComponent = null;
    if(this.props.editing){
      currentComponent = <EditBeerForm beer = {this.props.selectedBeer} onEditBeer={this.handleEditingBeerInList} />
      buttonText = "Return to beer list";
    } else if(this.props.selectedBeer !== null){
      currentComponent = <BeerDetails beer={this.props.selectedBeer} onClickingDelete = {this.handleDeletingBeer} onClickingEdit = {this.handleEditClick} onRestocking = {this.handleRestockBeer} onBuying = {this.handleBuyBeer} />
      buttonText = "Return to beer list"
    }else if(this.props.formVisible){
      currentComponent = <NewBeerForm onNewBeerCreation = {this.handleAddNewBeerToList}/>
      buttonText = "Return to beer list"
    } else {
      currentComponent = <BeerList beerList={this.props.masterBeerList} onBeerSelection={this.handleChangingSelectedBeer}/>
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

Control.propTypes = {
  masterBeerList: PropTypes.object,
  selectedBeer: PropTypes.object,
  formVisible: PropTypes.bool,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return{
    masterBeerList: state.masterBeerList,
    selectedBeer: state.selectedBeer,
    formVisible: state.formVisible,
    editing: state.editing
  }
};

Control = connect(mapStateToProps)(Control);

export default Control;