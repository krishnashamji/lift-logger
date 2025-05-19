import { router, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>Nothing to see here. Yet.</Text>
      <Text>Press this to create your first workout</Text>
      <Button
        title='Create workout' 
        onPress={()=>router.push('/(tabs)/(home)/customise-workout')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
