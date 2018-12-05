import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from './components/homepage';
import {Link} from 'react-router-dom';

class App extends Component {


    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className= "header-color" title="Kazace" scroll>
                        <Navigation>
                            <Link to="/home">Home</Link>
                            <Link to="/man">Man</Link>
                            <Link to="/girl">Girl</Link>
                            <Link to="/shoes">Shoes</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link to="/home">Home</Link>
                            <Link to="/man">Man </Link>
                            <Link to="/girl">Girl</Link>
                            <Link to="/shoes">Shoes</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"/>
                    <Main/>
                    </Content>
                </Layout>
            </div>
    );
    }
    }

    export default App;
