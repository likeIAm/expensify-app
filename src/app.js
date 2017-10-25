import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
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
        {/*like this will cause a request to the server, we should modify the normal behaviour of the browser, but there's the Link tag that does this for us*/}
        404! / <a href="/">Go home page</a>
        {/*Client routing*/}
        404! / <Link to="/">Go home page</Link> 
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