import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'flex-end'
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    borderRadius: 25,
    flex: 1,
    alignItems: 'flex-end'
  },
  textInputStyle: {
    flex: 1,
    marginHorizontal: 10
  },
  iconStyle: {
    marginHorizontal: 5
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles;
