

import * as React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default (props) => {
  
  return (
    <Input
    value={props.value}
    onChange={props.onChange}
    onChangeText={props.onChangeText}

      containerStyle={{marginTop:20}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      errorMessage={props.error && `Oops! something went wrong , Please try again`}
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} />}
      rightIconContainerStyle={{}}
      placeholder="Enter Name"
      // ref={props.emailRef}
    />
  );
}