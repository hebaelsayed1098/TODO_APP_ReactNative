import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
export const TodoList = ({ todos, handleCheckBox, counterDone }) => {
  const [isSelected, setSelected] = useState(false);
  let fun = (item) => {
    setSelected(item.done);
  };
  return (
    <View>
      <Text
        style={{
          padding: "4%",
          borderRadius: 10,
          color: "white",
          marginLeft: "20%",
          marginRight: "20%",

          fontSize: 14,
          backgroundColor: "#4e6190",
        }}
      >
        {counterDone} Tasks Done out of {todos.length} Tasks
      </Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text
                style={{
                  color: "#4e6190",
                  fontSize: 16,
                }}
              >
                {item.title}
              </Text>
              <View style={{ marginLeft: 10 }}>
                <Checkbox
                  value={item.done}
                  onValueChange={() => {
                    console.log(isSelected);
                    handleCheckBox(item.id);
                  }}
                />
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ListHeaderComponent={() => (
          <Text style={styles.ListHeader}>Your Tasks</Text>
        )}
        ListEmptyComponent={() => (
          <View style={{ margin: 40, marginTop: "5%" }}>
            <Text style={styles.empty}>No Tasks Here..</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  strikeThroughTextStyle: {
    textDecorationLine: "line-through",
  },
  container: {
    backgroundColor: "#EEE",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "7%",
    marginRight: "7%",
    color: "#4e6190",
    marginTop: "3%",
    height: 50,
    padding: 12,
    borderRadius: 10,
  },
  ListHeader: {
    marginLeft: "35%",
    marginTop: "5%",
    fontWeight: "bold",
    color: "#4e6190",
    fontSize: 20,
  },
  empty: {
    textAlign: "center",
    marginBottom: "5%",
    fontWeight: "bold",
    fontSize: 18,
    color: "#4e6190",
  },
});
