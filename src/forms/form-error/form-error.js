import {connect} from 'react-view-models';
import DefineMap from 'can-define/map/map';
import View from './form-error.jsx';

export const ViewModel = DefineMap.extend({
  error: 'string',
  clearError: 'any'
});

export default connect(ViewModel, View);
