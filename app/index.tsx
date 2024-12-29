import Ani from "@/comonents/ani";
import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        padding: 50,
        gap: 50,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ height: 100 }}>
        <Ani />
      </View>
      <View>
        <Button onPress={() => router.push("./bugView")} title="open problem" />
        <Button
          onPress={() => router.replace("./bugView")}
          title="open noProblem"
        />
      </View>
    </View>
  );
}
