import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 4
  },
  username: {
    color: '#5CB85C'
  },
  createdAt: {
    fontSize: 10,
    color: '#BBB'
  }
});
