import gql from 'graphql-tag';
import * as React from 'react';
import { Component, ReactNode } from 'react';
import { compose, DataProps, graphql } from 'react-apollo';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

import { User } from './types';
import { UserEventsWithData } from './UserEvents';

type UserDetailsRouterProps = RouteComponentProps<{ userId: string }>;
type UserDetailsDataProps = DataProps<{ user: User }>;
type UserDetailsProps = UserDetailsDataProps & UserDetailsRouterProps;

class UserDetails extends Component<UserDetailsProps> {

    public render(): ReactNode {
        const { user } = this.props.data;

        if (this.props.data.loading) {
            return <Loader active={true}>Loading...</Loader>;
        }

        if (!user || !user.id) {
            return <p>User not found!</p>;
        }

        return (
            <>
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
                <UserEventsWithData userId={user.id} />
            </>
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
