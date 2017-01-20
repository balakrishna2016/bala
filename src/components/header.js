import React, { Component } from 'react';

import {connect} from 'react-redux'

import * as actions from '../redux/actions'

class Header extends Component{
    render(){
        console.log(this.props)
        return(
            <button
            onClick={this.props.UpdateCount}
            >Click Me</button>
        );
    }
}


export default connect(null,actions)(Header)

