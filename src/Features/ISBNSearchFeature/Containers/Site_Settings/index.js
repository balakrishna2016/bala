import React, { Component } from 'react';

import FilterLabel from './FilterLabel'
import TagLabel from './TagLabel'
import MaxCards from './MaxCards'

class SiteSettings extends Component {
    render() {
        return (
            <div className="site_settings_wrapper">
                <div>
                    <FilterLabel />
                </div>

                <div>
                    <TagLabel />
                </div>

                <div>
                    <MaxCards />
                </div>

            </div>
        );
    }
}


export default SiteSettings