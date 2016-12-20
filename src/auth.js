import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import Template from './auth.jsx';
import './auth.less';

export const ViewModel = DefineMap.extend({
});

export default connect(ViewModel, Template);
