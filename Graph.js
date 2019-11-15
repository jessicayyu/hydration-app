import React from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [1, 1, 1, 1, 1, 1]
    }
  }

  componentDidMount() {
    axios.get('/user/100/water')
      .then( (response) => {
        console.log(response);
        this.setState({
          days: response
        })
      })
  }

  render() {
    return (
      <View style={styles.graphdiv}>
        {this.state.days.map((value, i) => {
          let barHeight = Number(value * 30);
          return (
            <View key={i} height={barHeight} style={styles.bar}></View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  graphdiv: {
    display: "flex",
    width: "100%",
    height: 250,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  bar: {
    display: "flex",
    width: 40,
    backgroundColor: "#33CCFF",
  }
})

export default Graph;