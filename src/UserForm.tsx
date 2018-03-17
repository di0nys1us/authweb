import { ApolloQueryResult } from 'apollo-boost';
import gql from 'graphql-tag';
import * as React from 'react';
import { ChangeEventHandler, Component, FormEventHandler, ReactNode } from 'react';
import { compose, graphql } from 'react-apollo';
import { RouteComponentProps, withRouter } from 'react-router';
import { Form, FormButton, FormInput, Message } from 'semantic-ui-react';

import { User } from './types';

interface UserFormDataProps {
    createUser: (user: User) => Promise<ApolloQueryResult<{ createUser: { user: User } }>>;
}

interface UserFormState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type UserFormProps = UserFormDataProps & RouteComponentProps<{}>;

class UserForm extends Component<UserFormProps, UserFormState> {

    constructor(props: UserFormProps) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }

    public render(): ReactNode {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormInput
                    label="First name:"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    required={true}
                />
                <FormInput
                    label="Last name:"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    required={true}
                />
                <FormInput
                    label="Email:"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    required={true}
                    type="email"
                    error={false}
                />
                <Message error={true} content="Invalid email!" visible={false} />
                <FormInput
                    label="Password:"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    required={true}
                    type="password"
                />
                <FormButton type="submit" color="violet">Save</FormButton>
            </Form>
        );
    }

    private handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        this.props.createUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            enabled: true,
            deleted: false
        }).then(({ data }) => (this.props.history.push(`/users/${data.createUser.user.id}`)));

        this.setState({
            password: ''
        });
    }

    private handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({
            firstName: event.currentTarget.value
        });
    }

    private handleLastNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({
            lastName: event.currentTarget.value
        });
    }

    private handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({
            email: event.currentTarget.value
        });
    }

    private handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({
            password: event.currentTarget.value
        });
    }
}

const createUser = gql`
    mutation CreateUser($input: UserInput!) {
        createUser(input: $input) {
            user {
                id
                version
            }
        }
    }
`;

const UserFormWithData = compose(
    withRouter,
    graphql(createUser, {
        props: ({ mutate }) => ({
            createUser: (user: User) => (mutate && mutate({ variables: { input: user } }))
        })
    })
)(UserForm);

export { UserFormWithData };
