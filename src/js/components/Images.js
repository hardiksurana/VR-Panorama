import React from 'react';

import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

import 'babel-polyfill';

export default class Images extends React.Component {
  render () {
    return (
        <Scene>
            <a-assets>
                <img id="panorama" src={this.props.src} crossOrigin="anonymous"/>
            </a-assets>
            <Entity
                primitive="a-sky"
                src="#panorama"/>

            <Entity primitive="a-camera">
              <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
            </Entity>
        </Scene>
    );
  }
}
