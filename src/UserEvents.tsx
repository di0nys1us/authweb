import gql from 'graphql-tag';
import * as React from 'react';
import { Component, ReactNode } from 'react';
import { DataProps, graphql } from 'react-apollo';

interface UserEventsProps {
    userId: string;
}

type UserEventsDataProps = DataProps<{}>;

class UserEvents extends Component<UserEventsProps & UserEventsDataProps> {

    public render(): ReactNode {
        return (
            <p>{this.props.userId}</p>
        );
    }
}

const findUserEvents = gql`
    query FindUserEvents($userId: ID!) {
        events(userId: $userId) {
            id
            createdAt
            type
            description
        }
    }
`;

const UserEventsWithData = graphql<UserEventsProps>(findUserEvents)(UserEvents);

export { UserEventsWithData };
