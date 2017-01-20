import React, { Component } from 'react';

import {connect} from 'react-redux'

class Body extends Component{
    render(){
        return(
            <div>
                Count {this.props.count}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.Count
    }
}

export default connect(mapStateToProps,null)(Body)