import * as React from 'react';
import { Component, MouseEventHandler, ReactNode } from 'react';
import { Spinner } from '../components';
import { IUser } from '../types/types';

class UserTable extends Component<any> {

    public render(): ReactNode {
        if (this.props.fetchingUsers) {
            return (
                <Spinner />
            );
        }

        const { users } = this.props;

        const rows = users.map((user: any) => (
            <tr key={`user-${user.id}`}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
            </tr>
        ));

        return (
            <div>
                <button className="btn btn-primary" onClick={this.fetchUsers}>Fetch users</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }

    private fetchUsers: MouseEventHandler<HTMLButtonElement> = () => {
        this.props.fetchUsers();
    }
}

export { UserTable };
