import React from 'react';
import { StyleSheet, Picker, Button, Text } from 'react-native';

class AddWater extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <Picker style={styles.picker} >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
      </Picker>
      <Picker style={styles.picker} >
        <Picker.Item label="oz" value="oz" />
        <Picker.Item label="cup" value="cup" />
      </Picker>
      <Button title="Water"/>
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
  }
})

export default AddWater;