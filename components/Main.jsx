import { ActivityIndicator, FlatList } from "react-native";

import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import Screen from "./Screen";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        // <ScrollView>
        //   {games.map((game) => (
        //     <GameCard key={game.slug} game={game} />
        //   ))}
        // </ScrollView>

        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
