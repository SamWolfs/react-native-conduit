import { StyleSheet } from 'react-native';

// CSS-in-JS generally uses camelCase versions of their CSS snake-cased counterpart
export const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'stretch' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }
});
