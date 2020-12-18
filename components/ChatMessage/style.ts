import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius:5,
    padding: 10,
  },
  textStyle: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginBottom: 5
  },
  time: {
    color: 'grey',
    alignSelf: 'flex-end'
  },
})

export default styles;
