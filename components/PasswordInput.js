import * as React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default (props) => {
  return (
    <Input
    value={props.value}
    onChangeText={props.onChangeText}
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      errorMessage={props.error && `Oops! that's not correct.`}
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{width:`50%`}}
      // label="User Form"
      labelStyle={{}}
      labelProps={{}}
    //   leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon type="font-awesome" name="eye" size={20} />}
      rightIconContainerStyle={{}}
      placeholder={props.placeHolder ? props.placeHolder: `Password`}
    />
  );
}