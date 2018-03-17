import gql from 'graphql-tag';
import * as React from 'react';
import { Component, ReactNode } from 'react';
import { compose, DataProps, graphql } from 'react-apollo';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

import { User } from './types';

type UserDetailsRouterProps = RouteComponentProps<{ userId: string }>;

type UserDetailsDataProps = DataProps<{ user: User }>;

class UserDetails extends Component<UserDetailsDataProps & UserDetailsRouterProps> {

    public render(): ReactNode {
        const { user } = this.props.data;

        if (this.props.data.loading) {
            return <Loader active={true}>Loading...</Loader>;
        }

        if (!user) {
            return null;
        }

        return (
            <dl>
                <dt>ID:</dt>
                <dd>{user.id}</dd>
                <dt>First name:</dt>
                <dd>{user.firstName}</dd>
                <dt>Last name:</dt>
                <dd>{user.lastName}</dd>
                <dt>Email:</dt>
                <dd>{user.email}</dd>
            </dl>
        );
    }
}

const fetchUser = gql`
    query FetchUser($id: ID!) {
        user(id: $id) {
            id
            firstName
            lastName
            email
        }
    }
`;

const UserDetailsWithData = compose(
    withRouter,
    graphql(fetchUser, {
        options: (props: UserDetailsRouterProps) => {
            return { variables: { id: props.match.params.userId } };
        }
    })
)(UserDetails);

export { UserDetailsWithData };
