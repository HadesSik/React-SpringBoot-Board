import '../../webapp/css/custom.css';

import React from 'react';

import * as rs from 'reactstrap';
import styled from 'styled-components';

import Danger from '../alert/Danger.jsx';
import Axios from "axios/index";

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

    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    login() {
        if(this.state.username !=="" && this.state.password !== ""){
            Axios.post("/login", {
                userId: this.state.userId,
                password: this.state.password
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
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
                <rs.Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <rs.ModalHeader toggle={this.toggle}>로그인 창</rs.ModalHeader>
                    <rs.ModalBody>
                        <form>
                            <rs.FormGroup row>
                                <rs.Label for="username" sm="3">아이디</rs.Label>
                                <rs.Col sm="9">
                                    <rs.Input type="text" name="userId" onChange={this.changeValue} id="userId" placeholder="UserID" />
                                </rs.Col>
                            </rs.FormGroup>
                            <rs.FormGroup row>
                                <rs.Label for="password" sm="3">비밀번호</rs.Label>
                                <rs.Col sm="9">
                                    <rs.Input type="password" name="password" onChange={this.changeValue} id="password" placeholder="Password" />
                                </rs.Col>
                            </rs.FormGroup>
                        </form>
                    </rs.ModalBody>
                    <rs.ModalFooter>
                        <rs.Button color="primary" onClick={this.login}>로그인</rs.Button>{' '}
                        <rs.Button color="secondary" onClick={this.toggle}>취소</rs.Button>
                    </rs.ModalFooter>
                </rs.Modal>
            </React.Fragment>
        );
    }

}

export default Login;