import { View } from 'react-native';

// data.json lives in the repository root, one level above src/.
import data from '../data.json';
import { colors } from './theme';
import MovieList from './components/MovieList';

export default function App() {
  const movies = Array.isArray(data?.movies) ? data.movies : [];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
      <MovieList movies={movies} />
    </View>
  );
}
