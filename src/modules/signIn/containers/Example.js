import Example from "../components/Example";
import { connect } from "react-redux";
import { switchName } from "../actions";

const mapStateToProps = state => ({
  name: state.signIn.name
});

const mapDispatchToProps = {
  switchName
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
