import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import Template from './signup.jsx';
import '../forms.less';

export const ViewModel = DefineMap.extend({
  email: 'string',
  password: '',
  SessionModel: '*',
  displayMessage: '*',
  signup (event) {
    this.displayMessage('hi');
    // new this.SessionModel(this.email, this.password).save().then(response => {
    //   console.log(response);
    // });
  }
});

export default connect(ViewModel, Template);
