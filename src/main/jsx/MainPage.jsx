import '../webapp/css/custom.css';
 
import React from 'react';
import ReactDOM from 'react-dom';

import * as rs from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Side from './sidemenu/Side.jsx';

 
class MainPage extends React.Component {
 
    render() {
        return (
        	<React.Fragment>
	        	<Side/>
        	</React.Fragment>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));