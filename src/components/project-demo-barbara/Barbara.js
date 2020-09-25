import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default class Barbara extends React.Component {
    render() {
        return (
            <div className="block-demo block-demo--barbara">
                <h4>Barbara Bui</h4>
                <Router>
                    <Switch>
                        <Route path="/barbara-project">
                            <BarbaraProject />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

function BarbaraProject() {
    return <h2>Home</h2>;
}