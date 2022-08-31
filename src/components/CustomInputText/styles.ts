import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export default StyleSheet.create({
  textInput: {
    backgroundColor: colors.GREY_LIGHT,
    fontSize: 15,
    color: colors.GREY_DARK,

    padding: 15,
  },
  label: {
    color: colors.GREY_MEDIUM,
  },
  errorMessage: {
    color: colors.PRIMARY,
    fontSize: 13,
  },
  passwordIcon: {
    width: 20,
    height: 20,
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20,
  },
  innerContainer: {
    justifyContent: 'center',
  },
});
