import { Link } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Dummy data for accounts
const DUMMY_ACCOUNTS = [
  { id: '1', name: 'Savings Account', balance: 5250.75 },
  { id: '2', name: 'Checking Account', balance: 1234.56 },
  { id: '3', name: 'Credit Card', balance: -876.21 },
  { id: '4', name: 'Investment Portfolio', balance: 15400.0 },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Accounts</Text>
      <FlatList
        data={DUMMY_ACCOUNTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            // Use the filename as the pathname to specify the template
            href={{
              pathname: '/[account]',
              // Provide values for the dynamic parts and any other params
              params: {
                account: item.id, // This fills the [account] part of the URL
                accountName: item.name,
                accountBalance: item.balance.toFixed(2),
              },
            }}
            asChild // This makes the Link use the child View as the touchable area
          >
            <TouchableOpacity>
              <View style={styles.accountItem}>
                <Text style={styles.accountName}>{item.name}</Text>
                <Text style={styles.accountBalance}>${item.balance.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
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
  accountItem: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // When using flexDirection: 'row', alignItems: 'center' ensures text elements with different heights are vertically centered
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  accountName: {
    fontSize: 18,
  },
  accountBalance: {
    fontSize: 18,
    fontWeight: '600',
  },
});
