import { validatePathConfig } from "expo-router/build/fork/getPathFromState-forks";
import { Button, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Ani() {
  const width = useSharedValue(50);

  const handlePress = () => {
    width.value = width.value + 50;
  };

  const animateStyle = useAnimatedStyle(() => ({
    width: withSpring(width.value),
  }));

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Animated.View
        style={[
          {
            height: 100,
            backgroundColor: "violet",
          },
          animateStyle,
        ]}
      />
      <Button onPress={handlePress} title="box.width.ani.change" />
    </View>
  );
}
