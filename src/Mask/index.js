import React from 'react'
import { Image, View } from 'react-native';

const Mask = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition
  }
}) => {
  const maskWidth = faceWidth * 1.7
  const maskHeight = faceHeight * 1.5
  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
      (rightEyePosition.x - leftEyePosition.x)
    )
  ) => angleRad * 180 / Math.PI
  return (
    <View style={{
      position: 'absolute',
      left: leftEyePosition.x - maskWidth * 0.35,
      top: leftEyePosition.y - maskHeight * 0.5
    }}>
      <Image
        source={require('../../assets/majora.png')}
        style={{
          width: maskWidth,
          height: maskHeight,
          resizeMode: 'cover',
          transform: [{ rotate: `${transformAngle()}deg`}]
        }}
      />
    </View>
  );
};

export default Mask