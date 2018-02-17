import * as React from 'react';
import { ChangeEventHandler, Component, FormEventHandler, ReactNode } from 'react';
import { ICredentials, IUser } from '../types/types';

interface INavigationState {
    email: string;
    password: string;
}

class Navigation extends Component<{}, INavigationState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    public render(): ReactNode {
        const user: any = null;

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
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );

        const signOutForm = (
            <form className="form-inline" onSubmit={this.handleSignOut}>
                <div className="navbar-text">
                    {user.email}
                </div>
                <button type="submit" className="btn btn-primary">Sign out</button>
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

    private handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({ ...this.state, email: event.currentTarget.value });
    }

    private handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({ ...this.state, password: event.currentTarget.value });
    }

    private resetForm(): void {
        this.setState({
            email: '',
            password: '',
        });
    }

    private handleSignIn: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        this.resetForm();
    }

    private handleSignOut: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        this.resetForm();
    }
}

export { Navigation };
