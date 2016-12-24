import { connect } from 'react-view-models';
import FormBaseViewModel from '../form-base-vm';
import View from './signup.jsx';
import '../forms.less';

export const ViewModel = FormBaseViewModel.extend({
  /**
   * `formName` is only used for logging.
   */
  formName: {
    value: 'SignupForm'
  },

  /**
   * `buttonText` is the action text inside the main button.
   */
  buttonText: {
    value: 'Sign Up'
  }
});

export default connect(ViewModel, View);
