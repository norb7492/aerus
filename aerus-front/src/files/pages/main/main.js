import React, { Component } from 'react';
import Header from './../../components/header/header';
import Navbar from './../../components/navbar/navbar';
import Footer from './../../components/footer/footer';
import './main.scss';

export default class Main extends Component {

    render() {
        return (
            <div className="content">
                <Header />
                <Navbar />
                <main>Main</main>
                <Footer />
            </div>
        )
    }
}