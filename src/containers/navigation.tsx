import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { signIn, signOut } from "../actions/sign-in-actions";
import { ICredentials, IState, IUser } from "../types/types";

interface INavigationStateProps {
    user?: IUser;
}

interface INavigationDispatchProps {
    signIn: (credentials: ICredentials) => any;
    signOut: () => any;
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
        const user = this.props.user || {} as IUser;

        const signInForm = (
            <form className="form-inline" onSubmit={this.handleSignIn}>
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
                <button type="submit" className="btn btn-outline-dark">Sign in</button>
            </form>
        );

        const signOutForm = (
            <form className="form-inline" onSubmit={this.handleSignOut}>
                <div className="navbar-text">
                    {user.email}
                </div>
                <button type="submit" className="btn btn-outline-dark">Sign out</button>
            </form>
        );

        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        authgo
                    </a>
                    {!user.email && signInForm}
                    {user.email && signOutForm}
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

    private resetForm() {
        this.setState({
            email: "",
            password: "",
        });
    }

    private handleSignIn = (event: React.SyntheticEvent<HTMLFormElement>): void => {
        event.preventDefault();
        this.props.signIn({
            email: this.state.email,
            password: this.state.password,
        });
        this.resetForm();
    }

    private handleSignOut = (event: React.SyntheticEvent<HTMLFormElement>): void => {
        event.preventDefault();
        this.props.signOut();
        this.resetForm();
    }
}

const mapStateToProps = (state: IState): INavigationStateProps => ({
    user: state.signIn.user,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): INavigationDispatchProps => ({
    signIn: (credentials: ICredentials) => dispatch(signIn(credentials)),
    signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
