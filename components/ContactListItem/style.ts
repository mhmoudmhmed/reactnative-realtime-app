import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    flex: 1
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  midContainer: {
    justifyContent: 'space-between',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16
  },
  status: {
    fontSize: 14,
    color: 'grey',
  },
})
export default styles;
