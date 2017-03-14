import React, { Component } from 'react';
import '../../../../App.css'

import IRT from '../../Components/IRT'
import IRTC from '../../Components/IRTC'
import SiteIdentifier from '../../Components/SiteIdentifier'


// Story 2

import SiteSettings from '../Site_Settings'

class ISBNSearch extends Component {
    render() {
        return (
            <div className="pagewrapper">

                <div className="segment_headder" style={{
                            width : '100% !important',
                            paddingBottom : 2,
                            marginBottom : 20
                        }}>
                        SITE SETTINGS
                </div>


                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>

                    <div style={{ flex: 1 }}>
                        
                        <SiteIdentifier />
                        <IRT/>
                        <IRTC />

                    </div>

                    <div style={{
                        flex: 1
                    }}>

                    </div>
                </div>

                <SiteSettings />

            </div>);
    }
}

export default ISBNSearch
