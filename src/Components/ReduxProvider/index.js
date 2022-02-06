import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../redux/reducers";

const store = createStore(rootReducer);

const ReduxProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
