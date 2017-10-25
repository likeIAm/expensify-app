import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard stateless component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is my add expense stateless component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is my edit expense stateless component
    </div>
);

const HelpPage = () => (
    <div>
        This is my help expense stateless component
    </div>
);

const NotFound404Page = () => (
    <div>
        404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} /> {/*exact true, if not it will match it everytime*/}
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFound404Page} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));