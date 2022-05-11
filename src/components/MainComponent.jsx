import React, { Component } from 'react';

import Menu from './MenuComponent';

import { DISHES } from '../shared/dishes';

import Header from './HeaderComponent';

import Footer from './FooterComponent';

import Home from './HomeComponent';

import { Route, Routes } from 'react-router-dom';

import Contact from './ContactComponent';

import { COMMENTS } from '../shared/comments';

import { PROMOTIONS } from '../shared/promotions';

import { LEADERS } from '../shared/leaders';

import DishDetail from './DishdetailComponent';







class Main extends Component {



    constructor(props) {

        super(props);

        this.state = {
            selectedDish: null,

            dishes: DISHES,

            comments: COMMENTS,

            promotions: PROMOTIONS,

            leaders: LEADERS

        };

    }



    onDishSelect(dishId) {

        this.setState({ selectedDish: dishId })

    }



    render() {
        const HomePage =
            <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />;
        const renderMenu = <Menu dishes={this.state.dishes} selectedDish={this.state.selectedDish} onClick={(dishId) => this.onDishSelect(dishId)} />;
        const DishWithId = ({ match }) => {

            return (

                <DishDetail comments={this.props.comments} dishes={this.props.dishes} selectedDish={match.params.dishId} />

            );

        };


        return (
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={HomePage} />
                    <Route path='/home' element={HomePage} />
                    <Route path='/menu' element={renderMenu} />
                    <Route exact path='/contactus' element={<Contact />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                </Routes>
                <Footer />
            </div>
        )
    }

}



export default Main; 