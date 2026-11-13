import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme';

export default function GenreTags({ genre }) {
  const genres = Array.isArray(genre)
    ? genre
    : typeof genre === 'string'
      ? genre.split(',').map((item) => item.trim()).filter(Boolean)
      : [];

  if (genres.length === 0) return null;

  return (
    <View style={styles.row}>
      {genres.map((item) => (
        <View key={item} style={styles.tag}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    rowGap: 6,
  },
  tag: {
    backgroundColor: colors.accent,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 6,
  },
  text: {
    color: colors.textInverted,
    fontSize: 12,
    fontWeight: '700',
  },
});
