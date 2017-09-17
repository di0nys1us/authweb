import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Action } from "redux";
import { performLogin } from "../actions/login-actions";
import { ICredentials, IUser } from "../types/types";

interface INavigationStateProps {
    user?: IUser;
}

interface INavigationDispatchProps {
    performLogin: (credentials: ICredentials) => void;
}

interface INavigationState {
    email: string;
    password: string;
}

class Navigation extends React.Component<INavigationStateProps & INavigationDispatchProps, INavigationState> {
    constructor(props: INavigationStateProps & INavigationDispatchProps) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    public render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        authgo
                </a>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                        <button type="submit" className="btn btn-outline-dark">Login</button>
                    </form>
                </div>
            </nav>
        );
    }

    private handleEmailChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        this.setState({ ...this.state, email: event.currentTarget.value });
    }

    private handlePasswordChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        this.setState({ ...this.state, password: event.currentTarget.value });
    }

    private handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
        event.preventDefault();
        this.props.performLogin({
            email: this.state.email,
            password: this.state.password,
        });
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): INavigationDispatchProps => ({
    performLogin: (credentials: ICredentials) => dispatch(performLogin(credentials)),
});

export default connect(null, mapDispatchToProps)(Navigation);
