import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';
import { remove } from '../actions/actions';

const AddedFeatures = props => {
  //console.log("addfeats", props )
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} remove={props.remove} addPrice={props.addPrice}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
    addPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { remove })(AddedFeatures);
