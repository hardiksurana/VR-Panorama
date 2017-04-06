import React from 'react';
import ReactDOM from 'react-dom';

import Images from "./Images";

export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    componentWillMount() {
        fetch(
            "https://demo0813639.mockable.io/getPanos", {
                method: 'get'
            }
        ).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                this.setState({
                    images: JSON.parse(JSON.stringify(data))
                });
            }
        );
    }

    handleClick(src, e) {
        ReactDOM.render(<Images src={src}/>, app);
    }

    render() {
        var id = 0;
        var image_tag = this.state.images.map(
            function(img, id) {
                id = id + 1;
                return(
                    <img key={id} id={id}
                        className="img"
                        src={img.pano}
                        onClick={this.handleClick.bind(this, img.pano)} />
                )
            }, this );

        return(
            <div>
                <h1>VR Panorama Gallery Application</h1>
                {image_tag}
            </div>
        );
    }
}
