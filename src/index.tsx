import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Appliction from "./containers/application";
import store from "./store";
import "./style/style";

ReactDOM.render(
    <Provider store={store}>
        <Appliction />
    </Provider>,
    document.getElementById("root"),
);
