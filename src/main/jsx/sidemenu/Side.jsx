import '../../webapp/css/custom.css';

import React from 'react';

import * as rs from 'reactstrap';

import styled from 'styled-components';

import Login from '../login/Login.jsx';
import List from '../board/category/List.jsx';



class Side extends React.Component {

    selCategory = (num) => {
        this.props.selCategory(num);
    }

    render() {

        return (
            <React.Fragment>
                <rs.Container>
                    <h1>게시판</h1>
                    <Login
                        text={"로그인"}
                        color={"white"}
                        bg={"black"}
                    />
                    <List
                        selCategory={this.selCategory}
                    />
                </rs.Container>
            </React.Fragment>
        );
    }

}

export default Side;