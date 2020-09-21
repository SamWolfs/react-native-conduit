import { StyleSheet } from 'react-native';

// CSS-in-JS generally uses camelCase versions of their CSS snake-cased counterpart
export const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  tags: { flex: 0, flexDirection: 'row' }
});
