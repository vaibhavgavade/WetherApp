import {connect} from 'react-redux';
const test = theme => {
  return;
};
const mapStateToprops = ({myTheme}) => {
  const {theme} = myTheme;
  return {theme};
};
export default connect(mapStateToprops)(test);
