import {
  Image,
  ImageSourcePropType,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import styles from './styles';
import { colors } from '../../utils/colors';

type Props = {
  error?: string;
  onChangeText: (value: string) => void;
  value: string;
  icon?: ImageSourcePropType;
  label?: string;
  password?: boolean;
};

const CustomInputText = (props: Props) => {
  const [focused, setFocused] = useState(false);
  const [secureText, setSecureText] = useState(false);
  return (
    <View>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.innerContainer}>
        <TextInput
          secureTextEntry={secureText}
          onChangeText={props.onChangeText}
          onEndEditing={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          selectionColor={colors.PRIMARY}
          style={{
            ...styles.textInput,
            borderWidth: ((props.error || focused) && 1) || 0,
            borderColor:
              (props.error && colors.PRIMARY) ||
              (focused && colors.GREY_MEDIUM) ||
              'transparent',
          }}
          value={props.value}
        />
        {props.icon && <Image style={styles.icon} source={props.icon} />}

        {props.password && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setSecureText(!secureText)}
          >
            {/* <Image
              style={styles.passwordIcon}
              source={secureText ? icons.VIEW : icons.HIDE}
            /> */}
          </TouchableOpacity>
        )}
      </View>
      {props.error && <Text style={styles.errorMessage}>{props.error}</Text>}
    </View>
  );
};

export default CustomInputText;
