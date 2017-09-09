import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Action } from "redux";

class Navigation extends React.Component<{}, {}> {
    public render() {
        return <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <a href="/" className="navbar-brand">
                    authgo
                </a>
                <form action="post" className="form-inline">
                    <input type="text" className="form-control" placeholder="Email" />
                    <input type="password" className="form-control" placeholder="Password" />
                    <button type="submit" className="btn btn-outline-dark">Login</button>
                </form>
            </div>
        </nav>;
    }
}

export default connect()(Navigation);
