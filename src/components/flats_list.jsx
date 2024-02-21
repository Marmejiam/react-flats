import React, { Component } from 'react';
import Flat from './flat';

class FlatsList extends Component {

renderList = () => {
  return this.props.flats.map(flat => {
    return <Flat flat={flat} key={flat.name} flatClicked={this.props.selectedFlatFormul} />
  })
}
  render() {
    return (
      <div className='flat-list'>
        {this.renderList()}
      </div>
    )
  }
}

export default FlatsList;
