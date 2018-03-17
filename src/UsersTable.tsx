import gql from 'graphql-tag';
import * as React from 'react';
import { Component, ReactNode } from 'react';
import { DataProps, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button, Loader, Table } from 'semantic-ui-react';

import { User } from './types';

type UsersTableDataProps = DataProps<{ users: User[] }>;

const headerRow = [
    'ID',
    'Version',
    'First name',
    'Last name',
    'Email',
    'Enabled',
    'Deleted',
    ''
];

class UsersTable extends Component<UsersTableDataProps> {

    public render(): ReactNode {
        if (this.props.data.loading) {
            return <Loader active={true} />;
        }

        return (
            <>
                <Link to="/users/new" className="ui button">New user</Link>
                <Button onClick={this.refresh}>Refresh</Button>
                <Table
                    headerRow={headerRow}
                    tableData={this.props.data.users}
                    renderBodyRow={this.renderBodyRow}
                    celled={true}
                    striped={true}
                />
            </>
        );
    }

    private renderBodyRow = (user: User) => ({
        key: user.id,
        cells: [
            { key: 'user.id', content: user.id },
            { key: 'user.version', content: user.version },
            { key: 'user.firstName', content: user.firstName },
            { key: 'user.lastName', content: user.lastName },
            { key: 'user.email', content: user.email },
            { key: 'user.enabled', content: user.enabled ? 'Yes' : 'No' },
            { key: 'user.deleted', content: user.deleted ? 'Yes' : 'No' },
            { key: 'user.details', content: <Link to={`/users/${user.id}`}>Details</Link> }
        ]
    })

    private refresh = () => {
        if (this.props.data.refetch) {
            this.props.data.refetch();
        }
    }
}

const findUsers = gql`
    query FindUsers {
        users {
            id
            version
            firstName
            lastName
            email
            enabled
            deleted
        }
    }
`;

const UsersTableWithData = graphql(findUsers)(UsersTable);

export { UsersTableWithData };
