import '../../webapp/css/custom.css';

import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    };

    render() {


        return (
            <React.Fragment>
                <rs.ListGroup flush>
                    <rs.ListGroupItem disabled tag="a" href="#">Cras justo odio</rs.ListGroupItem>
                    <rs.ListGroupItem disabled tag="a" href="#">Cras justo odio</rs.ListGroupItem>
                </rs.ListGroup>
            </React.Fragment>
        );
    }

}

export default List;