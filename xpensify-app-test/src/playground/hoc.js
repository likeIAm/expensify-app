// High order components (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);
// this function return the HOC, that will be the wrapper to our Info component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Dont't share.</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthenticationInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ?
                <p>Please login</p> :
                <WrappedComponent {...props} />
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenticationInfo(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This are the details" />, document.getElementById('app'));