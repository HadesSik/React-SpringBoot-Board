import '../../../webapp/css/custom.css';

import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';

import Axios from 'axios';

import ListItem from './ListItem.jsx';

class List extends React.Component {

    componentWillMount(){
        this.getCategories();
    }

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };

    };

    getCategories= () => {
        Axios.post("/board/getlist")
            .then((response) => {
                this.setState({
                    categories: response.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    selCategory = (num) => {
        this.props.selCategory(num);
    }


    render() {
        const categoryList = () => (
            this.state.categories.map(categoryData => (
                <ListItem
                    data={categoryData}
                    selCategory={this.selCategory}
                />
            ))
        )

        return (
            <React.Fragment>
                <rs.ListGroup flush>
                    {categoryList()}
                </rs.ListGroup>
            </React.Fragment>
        );
    }

}

export default List;