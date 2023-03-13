import { Button, StyleSheet, Text, View } from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { CometChat } from "@cometchat-pro/react-native-chat";

// const appID = "APP_ID";
// const region = "REGION";
// const appSetting = new CometChat.AppSettingsBuilder()
//   .subscribePresenceForAllUsers()
//   .setRegion(region)
//   .build();
// CometChat.init(appID, appSetting).then(
//   () => {
//     console.log("Initialization completed successfully");
//     // You can now call login function.
//   },
//   (error) => {
//     console.log("Initialization failed with error:", error);
//     // Check the reason for error and take appropriate action.
//   }
// );

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <GiftedChat */}

      {/* <GiftedChat  style={{borderColor:`red`}}
            messages={[]}
      onSend={messages => []}
      user={{
        _id: 1,
      }} /> */}
      {/* //       renderSystemMessage={() => null} // disable system message rendering
//  /> */}
      {/* <GiftedChat /> */}
    </View>
  );
}

export default DetailsScreen;
