import '../../webapp/css/custom.css';

import React from 'react';

import * as rs from 'reactstrap';

import Login from '../login/Login.jsx';
import List from '../Board/List.jsx';

class Side extends React.Component {

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
                    <List />
                </rs.Container>
            </React.Fragment>
        );
    }

}

export default Side;