import { View, Text, StyleSheet } from "react-native";
//import styles  from '../style'
export const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: "20%",

    fontSize: 20,
    color: "white",
    textAlign: "center",

    padding: 10,
    margin: "15%",
    backgroundColor: "#4e6190",
    borderRadius: 10,
  },
});
