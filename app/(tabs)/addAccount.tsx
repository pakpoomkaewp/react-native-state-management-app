import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddAccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Account</Text>
      <TextInput style={styles.input} placeholder="Account Name (e.g., Savings)" />
      <TextInput style={styles.input} placeholder="Initial Balance" keyboardType="numeric" />
      <Button
        title="Save Account"
        onPress={() => Alert.alert('Account Saved!', 'This is where you would save the data.')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
