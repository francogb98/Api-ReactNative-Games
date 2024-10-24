import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";

import icon from "./assets/icon.png";
import { useEffect, useState } from "react";
import { getLatestGames } from "./lib/metacritic";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        fadeDuration={300}
        blurRadius={15}
        source={icon}
        style={{ width: 200, height: 200, resizeMode: "center" }}
      /> */}
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 35, fontWeight: "bold", marginTop: 20 }}>
        Tanjiro Kamado
      </Text>

      {/* button por defecto */}
      <Button color="green" title="Pulsa aqui" onPress={() => alert("hola")} />

      {/* button personalizado */}
      {/* <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("hola")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Segundo texto</Text>
      </TouchableHighlight> */}

      {/* Forma recomendada de estilizar botones */}
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 35 : 25,
              padding: pressed ? 15 : 10,
              borderRadius: 15,
            }}
          >
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
