import React from 'react';
import {
  StyleSheet,
  View,
  ViewPropTypes,
  TextInput,
  Pressable,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import colors from '../common/colors';
import {GenericStyles} from '../styles/GenericStyles';

const SearchButton = function (props) {
  
  const navigation = useNavigation();
  const {
    containerStyle,
    style,
    LeftComponent,
    RightComponent,
    refCallback,
    ...remainingProps
  } = props;

  return (
    <Pressable style={[styles.containerStyle, containerStyle]} onPress={()=>navigation.navigate("Search")}>
      {LeftComponent}
      <Text
        {...remainingProps}
        style={[styles.textInputStyle, GenericStyles.fill, style,{color:"#cdcdcd",alignSelf:"center"}]}
        ref={refCallback}>
        {' '}
        {props.placeholder}
      </Text>
      {RightComponent}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderColor: colors.WHITE_GREY,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  textInputStyle: {
    padding: 0,
  },
});

SearchButton.defaultProps = {
  LeftComponent: <></>,
  RightComponent: <></>,
};

SearchButton.propTypes = {
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  LeftComponent: PropTypes.object,
  RightComponent: PropTypes.object,
  refCallback: PropTypes.func,
};

export default SearchButton;
