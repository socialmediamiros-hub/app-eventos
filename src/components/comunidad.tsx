import { StyleSheet, Text, View } from 'react-native';

export default function ComunidadScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>COMUNIDAD</Text>

      <Text style={styles.title}>Club Social Canino</Text>

      <Text style={styles.subtitle}>
        Conectá con otros tutores, refugios, marcas pet friendly y experiencias para compartir con tu perro.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>❤️ Refugios</Text>
        <Text style={styles.cardText}>Próximamente: voluntariado, donaciones y jornadas de adopción.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🐶 Miembros cerca</Text>
        <Text style={styles.cardText}>Próximamente: tutores y perros cerca de tu zona.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
    justifyContent: 'center',
  },
  badge: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 14,
  },
  subtitle: {
    color: '#D1D5DB',
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 28,
  },
  card: {
    backgroundColor: '#111111',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 14,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  cardText: {
    color: '#D1D5DB',
    fontSize: 15,
    lineHeight: 22,
  },
});