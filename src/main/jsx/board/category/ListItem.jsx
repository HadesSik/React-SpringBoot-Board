import '../../../webapp/css/custom.css';

import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';


class ListItem extends React.Component {

    selCategory = () => {
        this.props.selCategory(this.props.data.bcId);
    }

    render() {

        const {bcName} = this.props.data;

        console.log(bcName);
        return (
            <React.Fragment>
                <rs.ListGroupItem onClick={this.selCategory}>{bcName}</rs.ListGroupItem>
            </React.Fragment>
        );
    }

}

export default ListItem;