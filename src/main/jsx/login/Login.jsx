import '../../webapp/css/custom.css';

import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            color: props.color,
            bg: props.bg
        };

        this.toggle = this.toggle.bind(this);
    };

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {

        const ModalBT = styled(rs.Button)`
            color: ${this.state.color};
            background-color: ${this.state.bg};
            border-color: ${this.state.bg};
        `;


        return (
            <React.Fragment>
                <ModalBT onClick={this.toggle}>{this.props.text}</ModalBT>
                <rs.Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <rs.ModalHeader toggle={this.toggle}>Modal title</rs.ModalHeader>
                    <rs.ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </rs.ModalBody>
                    <rs.ModalFooter>
                        <rs.Button color="primary" onClick={this.toggle}>Do Something</rs.Button>{' '}
                        <rs.Button color="secondary" onClick={this.toggle}>Cancel</rs.Button>
                    </rs.ModalFooter>
                </rs.Modal>
            </React.Fragment>
        );
    }

}

export default Login;