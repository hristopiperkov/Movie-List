import { Text, View } from "react-native";
import MovieCard from "./MovieCard";

export default function MovieList({movies}) {
    return (
            <View>
                <Text style={{ color: '#F8F5FC', fontSize: 24, margin: 50, marginTop: 50,}}>Movie List</Text>

                <MovieCard
                    {...movies[0]}
                />
            </View>
    );
}