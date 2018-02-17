import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Navigation } from './navigation';
import { UserTable } from './users';

class Application extends Component {

    public render(): ReactNode {
        return (
            <div>
                <Navigation />
                <div className="container" style={{ marginTop: '1rem' }}>
                    <UserTable />
                </div>
            </div>
        );
    }
}

export { Application };
