import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { fetchUsers } from "../actions/user-actions";
import Spinner from "../components/spinner";
import { IState, IUser } from "../types/types";

interface IUserTableStateProps {
    users: IUser[];
    fetchingUsers: boolean;
}

interface IUserTableDispatchProps {
    fetchUsers: () => any;
}

class UserTable extends React.Component<IUserTableStateProps & IUserTableDispatchProps, {}> {
    public render() {
        if (this.props.fetchingUsers) {
            return (
                <Spinner />
            );
        }

        const users = this.props.users;

        const rows = users.map((user) => (
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

    private fetchUsers = () => {
        this.props.fetchUsers();
    }
}

const mapStateToProps = (state: IState): IUserTableStateProps => ({
    users: state.users.users,
    fetchingUsers: state.users.fetchingUsers,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IUserTableDispatchProps => ({
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
