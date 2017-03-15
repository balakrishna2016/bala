import React, { Component } from 'react';


const Style = {
    Column : {
        paddingTop : 15,
        paddingBottom : 15,
        paddingRight : 10,
        paddingLeft : 10,
        //flex : 2,
        marginTop : 'auto',
        marginBottom : 'auto',
        width : '18%',
        flexDirection : 'row',
        display : 'flex',
        textAlign : 'center',
        //marginTop : 10
    }        
    
}



class SingleRow extends Component{
    constructor(){
        super();
        this.state = {
            isChecked : false
        }

    }


    render(){
        const {url_name,downloadable,content,modified_on,modified_by} = this.props.Data
        return(
            <div style={{
                display :'flex',
                flexDirection : 'row',
                //backgroundColor : 'green',
                fontWeight : this.props.id === 0 ? "600" : "300",
                flex : 1,
                alignItems : 'center',
                justifyContent : 'center',
                borderBottomColor : 'rgb(218, 223, 227)',
                borderTopColor : 'rgb(218, 223, 227)',
                borderWidth : 1,
                borderTopStyle : 'solid',
                borderBottomStyle : 'solid'
            }}>
            
            <div style={{
                marginTop : 'auto',
                marginBottom : 'auto',
                //alignContent : 'center'
                }}
                onClick={()=>{
                    this.setState({
                        isChecked : !this.state.isChecked
                    })
                }}
                >

                {
                    this.state.isChecked ?
                    <i 
                    className="material-icons" 
                    style={{
                    color : 'rgba(171, 177, 183,0.9)',
                    fontSize : 18,
                    marginRight : 10
                    }}
                    >check_box_outline_blank</i>
                    :
                    <i 
                    className="material-icons" 
                    style={{
                    color : 'rgba(171, 177, 183,0.9)',
                    fontSize : 18,
                    marginRight : 10
                    }}
                    >check_box</i>
                }
                

                
                
            </div>
            
            <div style={Style.Column}>{url_name}</div>
            
            <div style={Style.Column}>{downloadable}</div>
            
            <div style={Style.Column}>{content}</div>

            <div style={Style.Column}>{modified_on}</div>
            
            
            <div style={Style.Column}>{modified_by}</div>
            </div>
        );
    }
}



export default SingleRow