import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function AccountDetailScreen() {
  // Hook to get the parameters passed during navigation
  const { accountName, accountBalance } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* Provide a nice header with a title and back button */}
      <Stack.Screen options={{ title: 'Account Details' }} />
      <Text style={styles.title}>Account: {accountName}</Text>
      <Text style={styles.balance}>Current Balance: {accountBalance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  balance: {
    fontSize: 20,
    color: '#333',
  },
});
