import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Search from '../../pages/Search/Search';

import Layout from '../../components/Layout/Layout.jsx';
import Explore from '../../pages/Explore/Explore';

function Routes() {

    return(
        <Router>
            <Switch>
                <Layout>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/search' component={Search}/>
                    <Route path='/explore' component={Explore}/>
                </Layout>
            </Switch>
        </Router>
    )



}

export default Routes