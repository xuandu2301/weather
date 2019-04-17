import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
} from 'react-router-dom'

import App from '../App';
import aboutUs from './aboutUs';
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/app">App</Link></li>
                        </ul>
                        {/* <Route path="/" component={Welcome} /> */}
                        <Route path="/about" component={aboutUs} />
                        <Route path="/app" component={App} />
                    </div>
                </BrowserRouter>
                <h1 className="title-container__title">Welcome to weather update web</h1>
            </div>
        );
    }
}
export default Welcome;