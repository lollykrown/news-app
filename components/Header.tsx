import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: "https://res.cloudinary.com/lollykrown/image/upload/v1718284820/uploaded/2D6D30C0-A260-4AD2-833C-FF989D3E1AEC.jpg" }}
          style={styles.userImg}
        />
        <View style={{gap: 3}}>
          <Text style={styles.welcomeTxt}>Welcome</Text>
          <Text style={styles.userName}>Kay Agboola</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  welcomeTxt: {
    fontSize: 12,
    color: Colors.darkGrey
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.black
  }
});
