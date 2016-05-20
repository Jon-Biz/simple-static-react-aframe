import React from 'react'
import {Entity} from 'aframe-react'

export default props => (
  <Entity>
    <Entity light={{type: 'ambient', color: '#888'}}/>
    <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, -3]}/>
    <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>
  </Entity>
)