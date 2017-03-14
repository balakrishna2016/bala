import React, { Component } from 'react';


import Label from '../Components/Label'
import List from '../Components/List'

import ButtonBlock from '../Components/ButtonBlock'

import {connect} from 'react-redux'

export class BulkUpload extends Component{
    render(){
        return(
            <div>
                <Label/>
                <div style = {{height : 400}}>
                {
                    this.props.DropDownStatus ?
                    <List />
                    :
                    null
                }
                </div>
                <ButtonBlock/>
            

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        DropDownStatus: state.DropDown
    }
}

export default connect(mapStateToProps, null)(BulkUpload)

