import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function BugView() {
  return (
    <View
      style={{
        gap: 12,
        flex: 1,
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        onLayout={() => console.log("##### BugView.layout.flash")}
        style={{ backgroundColor: "#ddd", flex: 1 }}
      >
        <Text>This view will flash </Text>
      </View>
      <View style={{ height: 200 }}>
        <Button onPress={() => true} title="Only-Click" />
        <Button onPress={() => router.replace("/")} title="page-back" />
      </View>
    </View>
  );
}
