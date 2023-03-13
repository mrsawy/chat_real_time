import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  FlatList,
} from "react-native";
import Login from "./Login";

const DATA = [
  { id: 1, name: `ahmed` },
  { id: 2, name: `mohamed` },
];

const HomeScreen = ({ navigation }) => {
  const chatCard = ({ item }) => {
    return (
      <View style={styles.bigContainer}>
        <View style={{ width: 100 }}>
          <Image
            source={require(`./../assets/images/profile.png`)}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 20 }}>{item.name ? item.name : `none`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: `#F8F4EA`,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
      }}
    >
      <FlatList
        style={{ margin: 5, borderColor: `red`, width: `90%` }}
        data={DATA}
        renderItem={chatCard}
        keyExtractor={(item) => item.id}
      />
      <Button
      style={{borderRadius:20 }}
        title="Go to public Chat"
        onPress={() => navigation.navigate("Chat")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bigContainer: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    // marginButtom: 10,
    marginBottom:10,
    marginTop:5,
    borderColor: `green`,
    width: `100%`,
    height: 40,
    backgroundColor: `white`,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft:15,
    borderRadius: 30,
  },
  textContainer: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    width: `100%`,
    height: `100%`,
    transform: `translateY(-4px)`,
    // marginLeft:10
  },
});

{
  /* <Modal visible={modalVisible} animationType="fade" transparent={false}>
<View style={{borderColor:`#00ff00`,borderWidth:5,margin:`auto`,alignSelf:`center`}} >
  <Text>This is a modal!</Text>
  <Button title="Close" onPress={()=>{setModalVisible(false)}} />
</View>
</Modal> */
}
