import { Tabs } from 'expo-router';

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#222222',
          height: 70,
          paddingBottom: 12,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#777777',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
        }}
      />

      <Tabs.Screen
        name="mapa"
        options={{
          title: 'Mapa',
        }}
      />

      <Tabs.Screen
        name="crear"
        options={{
          title: 'Crear',
        }}
      />

      <Tabs.Screen
        name="comunidad"
        options={{
          title: 'Comunidad',
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}