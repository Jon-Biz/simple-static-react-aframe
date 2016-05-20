import React from 'react'
import {Entity} from 'aframe-react'

export default props => (
  <Entity
    material={{
      color: 'blue'
    }}

    position={[0,-20, 0]}
    geometry={
      { primitive:"plane"
      , width: "200000"
      , height: "200000"
      }
    }
    rotation={[-90, 0, 0]}
    >
  </Entity>
)
