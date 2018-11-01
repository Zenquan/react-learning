import React, {Component} from 'react';

const user = {
    firstName: 'Can',
    lastName: 'zenquan'
}
function formateName(user) {
    return user.firstName + ' ' + user.lastName;
}
function getGreeting(user) {
    if(user) {
        return <span>{formateName(user)}!</span>;
    }
    return <h1>Hello, Stranger.</h1>
}
class Element extends Component {
    render(){
        return (
            <div>
                <h1>Hi, {formateName(user)}</h1>
                <h2>Hi, {getGreeting(user)}</h2>
            </div>
        )
    }
}

export default Element;