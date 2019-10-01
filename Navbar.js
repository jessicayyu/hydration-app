import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.button}>
          <Text styles={styles.text}>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text styles={styles.text}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text styles={styles.text}>Collection</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navbar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "#00b3dd",
    padding: 5,
  },
  button: {
    alignItems: "center",
    padding: 5,
  },
  text: {
    color: "#ffffff"
  }
});

export default Navbar;