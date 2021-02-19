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
  constructor(props){
    super(props);
    this.state={
      // formVisible: false,
      selectedBeer:null,
      editing: false
    }
  }

  handleClick = () => {
    const { dispatch } = this.props
    if(this.state.selectedBeer != null){
      if(this.props.formVisible){
        const action = a.toggleForm();
        dispatch(action);
      }
      this.setState({
        selectedBeer: null,
        editing: false
      });
    } else {
      const action2 = a.toggleForm();
      dispatch(action2);
    }
  }

  handleAddNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    let action = a.addBeer(newBeer);
    dispatch(action);
    this.setState({
      formVisible: false
    })
  }

  handleRestockBeer= (id, restockAmount) => {
    let newMasterBeerList = this.props.masterBeerList;
    if(restockAmount > 0){
      newMasterBeerList = Object.values(this.props.masterBeerList).map(beer=> ({
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
    const newMasterBeerList = Object.values(this.props.masterBeerList).map(beer => ({
      ...beer,
      quantity: beer.id === id ? beer.quantity -1: beer.quantity
    }))
    this.setState({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
    }


  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = Object.values(this.props.masterBeerList)
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
    const { dispatch } = this.props; 
    const action = a.deleteBeer(id);
    dispatch(action);
    this.setState({
      editing: false,
      selectedBeer:null
    })
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = Object.values(this.props.masterBeerList).filter(beer => beer.id === id)[0];
    this.setState({selectedBeer: selectedBeer});
  }

  render(){
    console.log(this.props.masterBeerList);
    let buttonText = null;
    let currentComponent = null;

    if(this.state.editing){
      currentComponent = <EditBeerForm beer = {this.state.selectedBeer} onEditBeer={this.handleEditingBeerInList} />
      buttonText = "Return to beer list";
    } else if(this.state.selectedBeer !== null){
      currentComponent = <BeerDetails beer={this.state.selectedBeer} onClickingDelete = {this.handleDeletingBeer} onClickingEdit = {this.handleEditClick} onRestocking = {this.handleRestockBeer} onBuying = {this.handleBuyBeer} />
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
  // selectedBeer: PropTypes.object,
  formVisible: PropTypes.bool,
  // editing: PropTypes.bool
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