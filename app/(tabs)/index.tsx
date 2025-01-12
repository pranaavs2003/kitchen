import { StyleSheet, Button } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-9xl text-white" >Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Button title='go to chat' onPress={() => router.push('/Chat')} />
      <Button title='go to notification' onPress={() => router.push('/Notification')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
