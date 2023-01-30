
import { View, Text, SafeAreaView } from "react-native";
import React, { useCallback, forwardRef, useImperativeHandle } from "react";
import styles from "./tv.style";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

var vh = Dimensions.get('window').height;

const BottomSheet = forwardRef(({ activeHeight }, ref) => {

  const topAnimation = useSharedValue( vh * .4 );

  const animationStyle = useAnimatedStyle(() => ({ top: topAnimation.value }));

  const expand = useCallback(() => {
    'worklet';
    topAnimation.value = withSpring(activeHeight, {
        damping: 100,
        stiffness: 400
    });
  },[]);

  const close = useCallback(() => {
    'worklet';
    topAnimation.value = withSpring(vh, {
        damping: 100,
        stiffness: 400
    });
  },[]);

  useImperativeHandle(ref, () => ({
    expand, close
  }), [expand, close])

  const backDropAnimation = useAnimatedStyle(() => {
    const opacity = interpolate(
      topAnimation.value,
      [vh, activeHeight],
      [0, 0.5]
    );
    
    const display = opacity === 0 ? "none" : "flex";

    return {
      opacity,
      display,
    };
  });

  return (
    <>
      <TouchableWithoutFeedback onPress={() => {close()}}>
        <Animated.View style={[styles.backDrop, backDropAnimation]} />
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.bottomCont, topAnimation]}>
        <View style={styles.bottomLine} />
      </Animated.View>
    </>
  );
});

export default BottomSheet;
