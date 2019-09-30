/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Picker,
  Button
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const date = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[date.getMonth()];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{month + ' ' + date.getDate() + ', ' + date.getFullYear()}</Text>
              <Text style={styles.sectionTitle}>Welcome to Hydro Pets!</Text>
              <Text style={styles.sectionDescription}>
                You've drank <Text style={styles.highlight}>3 cups 4 oz</Text> of water today!{'\n'}
                {'\n'}
                Blobby is looking pretty cheerful.{'\n'}
              </Text>
              <Image style={styles.pet} source={require('./img/cat.gif')}/>
              <Text style={styles.sectionDescription}>
                Water Blobby?
              </Text>
              <Picker style={styles.picker} >
                <Picker.item label="0" value="0" />
                <Picker.item label="1" value="1" />
                <Picker.item label="2" value="2" />
                <Picker.item label="3" value="3" />
              </Picker>
              <Picker style={styles.picker} >
                <Picker.item label="oz" value="oz" />
                <Picker.item label="cup" value="cup" />
              </Picker>
              <Button title="Water"/>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  pet: {
    width: 200,
    height: 200,
    display: 'flex'
  },
  picker: {
    display: 'flex',
    flexDirection: "row",
    width: 175
  }
});

export default App;
