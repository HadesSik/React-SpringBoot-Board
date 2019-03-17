import '../../webapp/css/custom.css';

import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';

class Danger extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            text: props.text,
            backdrop: 'static'
        };

        this.toggle = this.toggle.bind(this);
    };

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {

        return (
            <React.Fragment>
                <rs.Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <rs.ModalHeader toggle={this.toggle}>경고 창</rs.ModalHeader>
                    <rs.ModalBody>
                        {this.state.text}
                    </rs.ModalBody>
                    <rs.ModalFooter>
                        <rs.Button color="secondary" onClick={this.toggle}>닫기</rs.Button>
                    </rs.ModalFooter>
                </rs.Modal>
            </React.Fragment>
        );
    }

}

export default Danger;