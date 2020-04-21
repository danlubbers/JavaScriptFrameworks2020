/**
 * You will be creating a container for the Counter component.
 * A container connects a component to the Redux store.
 * @see https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html
 */

/**
 * Import something form Redux here
 */
import Counter from "./Counter";
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716

/**
 * Import the actions that you need
 */
<<<<<<< HEAD
import {
  increaseCount,
  decreaseCount
} from '../../actions';
=======
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716

/**
 * Complete this function. You may need to pass in arguements
 */
<<<<<<< HEAD
const mapStateToProps = state => {
  // console.log("state", state);
  return {
    count: state.count
  }
}
=======
function mapStateToProps() {}
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716

/**
 * Complete this function. You may need to pass in arguements
 */
<<<<<<< HEAD
const mapDispatchToProps = { 
  increaseCount, 
  decreaseCount 
};
=======
function mapDispatchToProps() {}
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716

/**
 * Refactor this so that you are connecting the Counter to the Redux store.
 */
<<<<<<< HEAD
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter);
=======
export default Counter;
>>>>>>> 40892a105b1f14e293b4ffba867e2c03f2f69716
