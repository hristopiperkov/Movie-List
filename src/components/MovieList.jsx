import { FlatList, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';
import MovieCard from './MovieCard';

export default function MovieList({ movies = [] }) {
  return (
    <FlatList
      data={movies}
      keyExtractor={(movie, index) => String(movie.id ?? movie.title ?? index)}
      renderItem={({ item }) => <MovieCard {...item} />}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Movie List</Text>
          <Text style={styles.subtitle}>
            {movies.length} {movies.length === 1 ? 'movie' : 'movies'}
          </Text>
        </View>
      }
      ListEmptyComponent={
        <Text style={styles.empty}>No movies available yet.</Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 5,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 32,
  },
});
