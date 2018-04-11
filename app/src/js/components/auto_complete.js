import React from 'react';
import ReactDom from 'react-dom';
import Autocomplete from 'react-google-autocomplete';

const AutoCompleteComponent = (props) => (
        <div id="autocmplte">
           <Autocomplete
              style={props.style}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
              types={['(regions)']}
              componentRestrictions={{country: "ru"}}
          />
        </div>
      );
  export default AutoCompleteComponent;
