import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.slug}`}>
      <Pressable>
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View style={styles.text__body}>
            <Text style={styles.title}>{game.title} </Text>
            <Text style={styles.score}>{game.score} / 100 </Text>
            <Text style={styles.description}>
              {game.description.slice(0, 100)}...{" "}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    marginBottom: 28,
    display: "grid",
    flexDirection: "row",
    padding: 10,
    gap: 10,
    overflow: "hidden",
    width: 350,
    borderRadius: 10,
  },
  image: {
    width: 107,
    height: 107,
    borderRadius: 10,
  },
  text__body: {
    display: "flex",
    flexDirection: "column",
    width: 200,
  },

  title: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
  },
  score: {
    fontSize: 10,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: "#eee",
  },
});
