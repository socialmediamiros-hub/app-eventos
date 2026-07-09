import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CrearScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>NUEVO ENCUENTRO</Text>

      <Text style={styles.title}>Crear plan canino</Text>

      <Text style={styles.subtitle}>
        Publicá un paseo, café pet friendly, playdate o encuentro para que otros tutores se sumen.
      </Text>

      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>🐕 Paseo grupal</Text>
        <Text style={styles.cardText}>Ideal para caminar con otros perros cerca tuyo.</Text>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.cardTitle}>☕ Café pet friendly</Text>
        <Text style={styles.cardText}>Armá un plan relajado con perros y café.</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Crear encuentro</Text>
      </Pressable>
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
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    backgroundColor: '#111111',
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
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '800',
  },
});