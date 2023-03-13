import { View, Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useState, useEffect, useCallback } from "react";
//// const msgCollection = collection(db, `massages`);
import {
  db,
  collection,
  query,
  orderBy,
  onSnapshot,
  auth,
} from "./../firebase/firebase";
import { addDoc } from "firebase/firestore";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, `massages2`);
    const q = query(collectionRef, orderBy( "createdAt", "desc"));
    const unSub = onSnapshot(q, (snapshot) => {
      snapshot.docs.length>0?setMessages(
        snapshot.docs.map((doc) =>({
          _id: doc.id ? doc.id : 0,
          createdAt: doc.data().createdAt?.toDate(),
          text: doc.data().text ? doc.data().text : `test`,
          user: doc.data().user ? doc.data().user : { name: `ahmed` },
        }))
      ):
      setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
    });
   return unSub ;
  }, []);

  const onSend = useCallback((messages = []) => {
    if (messages.length > 0) {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );

      const { _id, text, createdAt, user } = messages[0];
      const collectionRef = collection(db, `massages2`);
      addDoc(collectionRef, {
        text,
        _id,
        createdAt,
        user,
      });
    }
  }, []);

  return (
    <>
      {messages.length == 0 && (
        <View
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <Text>Loading ...</Text>
        </View>
      )}

      {messages.length !== 0 && (
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: auth.currentUser.email?auth.currentUser.email:Math.random(),
            avatar: url,
          }}
          messagesContainerStyle={{backgroundColor:`#1A0000`}}
        />
      )}
    </>
  );
};

export default Chat;

var url =
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a36e6001-0274-44c0-801d-3f819e03fb8e/fff-2022-23-stadium-home-mens-dri-fit-soccer-jersey-Nc3PwR.png";
