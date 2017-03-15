import React, { Component } from 'react';


const Style = {
    SingleRow : {
        paddingTop : 15,
        paddingBottom : 15,
        paddingRight : 10,
        paddingLeft : 10,
        flex : 1,
        flexDirection : 'row',
        display : 'flex',
        textAlign : 'center',
        fontWeight : '600'

        
    }        
    
}

const Header = {
    "url_name": "URL Pagename/Title",
    "downloadable": "Downloadable",
    "content": "Content",
    "modified_on": "Modified On",
    "modified_by": "Modified By"
}

class TableHeader extends Component {
    render() {
        const { url_name, downloadable, content, modified_on, modified_by } = Header
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                //padding: 20,
                flex: 1
            }}>


                <div style={Style.SingleRow}>{url_name}</div>

                <div style={Style.SingleRow}>
                    <div style={{
                        //backgroundColor : 'red',
                        width : '100%',
                        textAlign : 'center'
                    }}>
                    {downloadable}
                    </div>
                </div>

                <div style={Style.SingleRow}>{content}</div>

                <div style={Style.SingleRow}>{modified_on}</div>


                <div style={Style.SingleRow}>{modified_by}</div>
            </div>
        );
    }
}



export default TableHeader