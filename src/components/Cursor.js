import React from 'react'
import {Animation, Entity} from 'aframe-react'

const geometry = {
  primitive: 'ring',
  radiusInner: 0.01,
  radiusOuter: 0.016
}

const material = {
  color: 'white',
  shader: 'flat',
  opacity: 0.9,
  transparent: true
}

export default props => {
  return (
    <Entity
      cursor=''
      geometry={geometry}
      material={material}
      position="0 0 -1"
      >
      <Animation
        attribute="scale"
        begin="click"
        dur="150"
        fill="backwards"
        to="0 0 0"
        />
    </Entity>
  );
}