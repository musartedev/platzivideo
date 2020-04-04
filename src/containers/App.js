import React, { Component } from 'react';
import Header from '../components/Header';
import Search from "../components/Search";
import Footer from '../components/Footer';

import '../assets/styles/app.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Footer />
            </div>
        )
    }
}
