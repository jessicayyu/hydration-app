import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Graph from "./Graph.js"

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.historyContainer}>
        <View style={styles.header}>
          <Text style={{fontSize: 20, fontWeight: "900"}}>Date</Text>
          <Text style={{fontSize: 20, fontWeight: "900"}}>Amount</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sept 30</Text>
          <Text style={styles.text}>9 cups 3 oz</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sept 29</Text>
          <Text style={styles.text}>8 cups 6 oz</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sept 28</Text>
          <Text style={styles.text}>9 cups 3 oz</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sept 27</Text>
          <Text style={styles.text}>6 cups 5 oz</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sept 26</Text>
          <Text style={styles.text}>10 cups 2 oz</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Sept 25</Text>
          <Text style={styles.text}>8 cups 5 oz</Text>
        </View>
        <Graph />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  historyContainer: {
    display: "flex",
    padding: 10,
    paddingBottom: 300
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20
  },
  text: {
    fontSize: 20,
  }
})

export default History;