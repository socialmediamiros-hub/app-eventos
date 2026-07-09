import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Ariana</Text>

      <Text style={styles.location}>📍 Buenos Aires, Argentina</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🐶 Mi perro</Text>

        <Text style={styles.info}>Nombre: Bruno</Text>
        <Text style={styles.info}>Edad: 3 años</Text>
        <Text style={styles.info}>Raza: Golden Retriever</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.number}>12</Text>
          <Text style={styles.label}>Eventos</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.number}>48</Text>
          <Text style={styles.label}>Amigos</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.number}>4.9★</Text>
          <Text style={styles.label}>Reputación</Text>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: 30,
    justifyContent: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  name: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },

  location: {
    color: '#CCCCCC',
    marginTop: 8,
    marginBottom: 30,
    fontSize: 16,
  },

  card: {
    width: '100%',
    backgroundColor: '#111111',
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#333333',
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },

  info: {
    color: '#DDDDDD',
    fontSize: 16,
    marginBottom: 6,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  number: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },

  label: {
    color: '#BBBBBB',
    marginTop: 6,
  },

  button: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '700',
  },
});