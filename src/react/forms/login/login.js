import { connect } from 'react-view-models';
import DefineMap from 'can-define/map/';
import Template from './login.jsx';
import '../forms.less';

export const ViewModel = DefineMap.extend({
  email: 'string',
  password: '',
  SignupModel: '*',
  login (event) {
    new this.SignupModel(this.email, this.password).save().then(response => {
      console.log(response);
    });
  }
});

export default connect(ViewModel, Template);
