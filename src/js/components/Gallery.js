
import React from 'react';
import ReactDOM from 'react-dom';

import Images from "./Images";

export default class Gallery extends React.Component {
    // constructor initialises the state
    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    // images are fetched from the API before rendering
    componentWillMount() {
        fetch(
            "https://demo0813639.mockable.io/getPanos", {
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                credentials: 'omit'
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

    // renders the new VR Panorama with the clicked image
    handleClick(src, e) {
        ReactDOM.render(<Images src={src}/>, app);
    }

    // renders the images with the data received from the API
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
