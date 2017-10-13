import * as React from "react";
import { connect, Dispatch } from "react-redux";
import Navigation from "./navigation";
import UserTable from "./users";

class Application extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Navigation />
                <div className="container" style={{ marginTop: "1rem" }}>
                    <UserTable />
                </div>
            </div>
        );
    }
}

export default connect()(Application);
