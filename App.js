/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ImageBackground,
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
import AddWater from './AddWater.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <ImageBackground source={require('./img/bgtile.png')} style={{width: "100%", height: "100%"}} resizeMode="repeat">
    <SafeAreaView style={{marginTop: 30, paddingBottom: 30}}>
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
              <Text style={styles.highlight}>Blobby</Text> is looking pretty cheerful.{'\n'}
            </Text>
            <Image style={styles.pet} source={require('./img/cat.gif')}/>
            <Text style={styles.sectionDescription}>
              Would you like to water <Text style={styles.highlight}>Blobby</Text>?
            </Text>
            <AddWater />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    </>
  );
  }
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
    paddingBottom: 80,
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

});

export default App;
