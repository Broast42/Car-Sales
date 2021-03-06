import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { add } from '../actions/actions';

const AdditionalFeatures = props => {
  
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} add={props.add} addPrice={props.addPrice}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  
  return {
    additionalFeatures: state.additionalFeatures,
    addPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { add })(AdditionalFeatures);
