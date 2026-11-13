import { Text, View } from "react-native";

const styles = StyleSheet.create({
    tag: {
        backgroundColor: colors.accent,
        borderRadius: 16,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 8,
    },
    text: {
        color: colors.textInverted,
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default function GenreTags({ genre }) {
    
    const genres = genre.split(',').map((g) => g.trim());

    return (
        <View style={styles.row}>
            {genres.map((g, index) => (
                <View style={styles.tag} key={index}>
                    <Text>{name}</Text>  
        </View>
    );
}