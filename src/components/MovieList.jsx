import { Text, View } from "react-native";

import { colors } from "../styles/colors";

import MovieCard from "./MovieCard";

export default function MovieList({movies}) {
    return (
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Movie List</Text>
                    <Text style={styles.subtitle}>{movies.length} movies</Text>
                </View>

                <MovieCard
                    {...movies[0]}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 12,
        marginBottom: 16,
    },
    poster: {
        width: 90,
        height: 135,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        marginLeft: 14,
        justifyContent: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    title: {
        flex: 1,
        color: colors.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    meta: {
        color: colors.accent,
        fontSize: 13,
        marginTop: 6,
    },
    director: {
        color: colors.textMuted,
        fontSize: 14,
        marginTop: 4,
        marginBottom: 10,
    },
});