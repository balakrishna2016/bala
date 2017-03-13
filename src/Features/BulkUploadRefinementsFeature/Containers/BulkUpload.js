import React, { Component } from 'react';


import Label from '../Components/Label'
import List from '../Components/List'

import {connect} from 'react-redux'

import ButtonBlock from '../Components/ButtonBlock'

export class BulkUploadRefinements extends Component{
    render(){
        return(
            <div>
                <Label/>
                {
                    this.props.DropDownStatus ?
                    <List />
                    :
                    null
                }

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

export default connect(mapStateToProps, null)(BulkUploadRefinements)
