import React from 'react';
import { StyleSheet, Picker, TouchableOpacity, Text } from 'react-native';

class AddWater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waterQuantity: 0,
      waterUnit: 'oz'
    };

  }
  render() {
    return (
      <>
      <Picker style={styles.picker} selectedValue={this.state.waterQuantity} onValueChange={(itemValue, itemIndex) => {
        this.setState({ waterQuantity: itemValue });
        console.log('Changing qty: ' + itemValue);
      }}>
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
      </Picker>
      <Picker style={styles.picker} selectedValue={this.state.waterUnit} onValueChange={(itemValue, itemIndex) => {
        this.setState({ waterUnit: itemValue })
      }}>
        <Picker.Item label="oz" value="oz" />
        <Picker.Item label="cup" value="cup" />
      </Picker>
      <TouchableOpacity style={styles.button} title="Water" onPress={() => {
        this.props.calculateDaily(this.state.waterQuantity, this.state.waterUnit);
      }}>
        <Text style={{color: "#ffffff", fontSize: 18}}>Water</Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    display: 'flex',
    flexDirection: "row",
    width: 175
  },
  button: {
    backgroundColor: "#00b3dd",
    alignItems: "center",
    padding: 10,
    borderRadius: 20
  }
});

export default AddWater;