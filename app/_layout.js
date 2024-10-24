import { View, Text, StyleSheet, Pressable } from "react-native";
// import { Slot } from "expo-router";
import { Link, Stack } from "expo-router";
import { CircleInfoIcon } from "../components/icons";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitle: "",
          headerLeft: () => (
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              Game Developers
            </Text>
          ),
          headerRight: () => (
            <Link asChild href="/about" style={{ marginTop: 8 }}>
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
