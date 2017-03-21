/**
 * Created by veladii on 3/20/17.
 */

import React from 'react';

class Content extends React.Component {

    render() {
        console.log('items', this.props.items);
        return (
            <div className="container">
                <div className="col-lg-12 header-item">
                    <h1 className="page-header">Football</h1>
                </div>
                <div className="row">
                    {this.props.items.map((item, index) =>
                        <div className="col-md-6 portfolio-item">
                            <a>
                                <img className="img-responsive image" src={item.link} alt=""/>
                            </a>
                            <p>Upon yielding, kind sea subdue very seed sixth them lesser one lesser there earth days were multiply so sixth gathering fifth that man fowl made.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Content;