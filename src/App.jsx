import { Text, View } from 'react-native';

import data from './data.json';
import { colors } from './theme';

import MovieList from './components/MovieList';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
      <MovieList movies={data.movies} />
    </View>
  );
}
