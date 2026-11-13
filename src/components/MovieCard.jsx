import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';
import { formatDuration } from '../utils/formatDuration';
import GenreTags from './GenreTag';

export default function MovieCard({
  title,
  year,
  director,
  genre,
  durationMinutes,
  posterUrl,
}) {
  return (
    <View style={styles.card}>
      {posterUrl ? (
        <Image source={{ uri: posterUrl }} style={styles.poster} resizeMode="cover" />
      ) : (
        <View style={[styles.poster, styles.posterPlaceholder]}>
          <Text style={styles.posterPlaceholderText}>No poster</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.title}>{title || 'Untitled movie'}</Text>
        <Text style={styles.meta}>
          {[year, formatDuration(durationMinutes)].filter(Boolean).join(' • ')}
        </Text>
        {!!director && <Text style={styles.director}>{director}</Text>}
        <GenreTags genre={genre} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  poster: {
    width: 90,
    height: 135,
    borderRadius: 10,
    backgroundColor: colors.border,
  },
  posterPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  posterPlaceholderText: {
    color: colors.textMuted,
    fontSize: 11,
    textAlign: 'center',
  },
  info: {
    flex: 1,
    minWidth: 0,
    marginLeft: 14,
    justifyContent: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
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
