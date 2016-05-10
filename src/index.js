import 'babel-polyfill'
import aframe from 'aframe'
import {Animation, Entity, Scene} from 'aframe-react'
import React from 'react'
import ReactDOM from 'react-dom'

import Camera from './components/Camera'
import Cursor from './components/Cursor'
import Sky from './components/Sky'

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  render () {
    return (
      <Scene>
        <Camera><Cursor/></Camera>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

        <Entity geometry="primitive: box" material={{color: 'blue'}}
                onClick={this.changeColor.bind(this)}
                position="0 0 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
        </Entity>

        <Entity geometry="primitive: box" material={{color: 'red'}}
                onClick={this.changeColor.bind(this)}
                position="1 0 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
        </Entity>

        <Entity geometry="primitive: box" material={{color: 'blue'}}
                onClick={this.changeColor.bind(this)}
                position="0 1 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
        </Entity>

      </Scene>
    );
  }
}

const content = document.getElementById('app')

ReactDOM.render(<HelloWorld />, content)
