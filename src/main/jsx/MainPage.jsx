import '../webapp/css/custom.css';
 
import React from 'react';
import ReactDOM from 'react-dom';

import * as rs from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Side from './sidemenu/Side.jsx';

 
class MainPage extends React.Component {

    state = {
        choosed: 0
    }

    selCategory = (num) => {
        this.setState({
            choosed: num
        })

        console.log(this.state);
    }
 
    render() {
        return (
        	<React.Fragment>
                <rs.Container
                    fluid
                >
                    <rs.Row>
                        <rs.Col xs="3">
                            <Side
                                selCategory = {this.selCategory}
                            />
                        </rs.Col>
                        <rs.Col xs="9">
                            {this.state.choosed}
                        </rs.Col>
                    </rs.Row>
                </rs.Container>
        	</React.Fragment>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));