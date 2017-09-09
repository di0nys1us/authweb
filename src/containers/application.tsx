import * as React from "react";
import { connect, Dispatch } from "react-redux";
import Navigation from "../components/navigation";

class Application extends React.Component<{}, {}> {
    public render() {
        return <div>
            <Navigation />
        </div>;
    }
}

export default connect()(Application);
