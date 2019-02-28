import React, { Component } from 'react';
import { connect } from 'react-redux';


class Category extends React.Component {

  handleOnClick = (event) => {
    this.props.fetchCategories()
  }

  render(){
    const categories = this.props.categories && this.props.categories.map(category => <li key={category.id}>{category.name}</li>)


    return(
      <div>
        <button onClick={(event) => this.handleOnClick(event)}>Categories</button>
        <ol>{categories}</ol>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);



export function fetchCategories() {

  return function(dispatch){
    dispatch({type: 'LOADING_CATEGORIES'})
    return fetch('https://wger.de/api/v2/exercisecategory/')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATEGORIES', payload: responseJson.results})
    })
  }
}
