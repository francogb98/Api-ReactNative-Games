import { Stack } from "expo-router";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useLocalSearchParams } from "expo-router";
import Screen from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const { id } = useLocalSearchParams();

  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id).then(setGameInfo);
    }
  }, [id]);

  return (
    <Screen>
      <View>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#ffee00" },
            headerTintColor: "black",
            headerLeft: () => {},
            headerRight: () => {},
          }}
        />
        <ScrollView>
          {gameInfo === null ? (
            <ActivityIndicator size={"large"} />
          ) : (
            <View style={styles.body}>
              <Image source={{ uri: gameInfo.img }} style={styles.image} />
              <Text style={styles.title}>{gameInfo.title}</Text>
              <Text style={styles.score}>{gameInfo.score}</Text>
              <Text style={styles.description}>{gameInfo.description}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: 250,
    height: 350,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    color: "green",
    fontWeight: "bold",
  },
  score: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  description: {
    color: "white",
  },
});
