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
  Button,
  Animated
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navbar from './Navbar.js';
import AddWater from './AddWater.js';
import History from './History.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waterQty: 28,
      date: 'Today is...',
      x: 40,
      y: 0,
      evolved: false,
      page: 0
    }
    this.calculateDaily = this.calculateDaily.bind(this);
    this.renderDate = this.renderDate.bind(this);
    this.navigate = this.navigate.bind(this);
    this.petPosition = new Animated.Value(0);
  }

  componentDidMount() {
    this.renderDate();
    this.petAnimate();
  }

  petAnimate () {
    this.petPosition.setValue(0)
    Animated.timing(
      this.petPosition,
      {
        toValue: 8,
        duration: 2000
      }
    ).start(() => this.petAnimate())
  }

  navigate(input) {
    this.setState({ page: input });
  }

  renderDate() {
    const date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
    const dateToday = months[date.getMonth()] + ' ' +  date.getDate() + ', ' + date.getFullYear();
    this.setState({ date: dateToday });
  }

  calculateDaily(qty, unit) {
    let waterTotal = Number(this.state.waterQty);
    if (unit === 'cup') {
      waterTotal += 8 * qty;
    } else {
      waterTotal += Number(qty);
    }
    if (!this.state.evolved && waterTotal >= 32) {
      this.setState({ evolved: true });
      setTimeout(() => { this.setState({ evolved: false }) }, 100);
      setTimeout(() => { this.setState({ evolved: true })}, 200);
      setTimeout(() => { this.setState({ evolved: false })}, 400);
      setTimeout(() => {
        this.setState({ evolved: true });
      }, 800);
    }
    this.setState({ waterQty: waterTotal });
  }

  render() {
    let ozToday = this.state.waterQty % 8;
    let cupsToday = (this.state.waterQty  - ozToday) / 8;
    const movingX = this.petPosition.interpolate({
      inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      outputRange: [80, 100, 80, 60, 30, 0, 30, 60, 80 ]
    });
    const movingY = this.petPosition.interpolate({
      inputRange: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      outputRange: [0, 20, 0, 20, 10, 5, 20, 10, 5]
    });
    let petImg = 'https://imgur.com/cdmcbDZ.gif';
    if (this.state.evolved) {
      petImg = 'https://imgur.com/Jod8Gd6.gif';
    }
    if (this.state.page === 0) {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <ImageBackground source={require('./img/bgtile.png')} style={{width: "100%", height: "100%"}} resizeMode="repeat">
    <SafeAreaView style={{ marginTop: 10, paddingBottom: 30}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
        <View style={styles.body}>
          <Navbar navigate={this.navigate} />
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{this.state.date}</Text>
            <Text style={styles.sectionTitle}>Welcome back, Leslie!</Text>
            <Text style={styles.sectionDescription}>
              You've drank <Text style={styles.highlight}>{Boolean(cupsToday) && `${cupsToday} cups`} {ozToday} oz</Text> of water today!{'\n'}
              {'\n'}
              <Text style={styles.highlight}>Blobby</Text> is looking pretty cheerful.{'\n'}
            </Text>
            <Animated.Image style={{
              display: 'flex',
              width: 200,
              height: 200,
              position: "relative",
              left: movingX,
              bottom: movingY
            }} source={{ uri: petImg }}/>
            <Text style={styles.sectionDescription}>
              Would you like to water <Text style={styles.highlight}>Blobby</Text>?
            </Text>
            <AddWater calculateDaily={this.calculateDaily} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    </>
  );
  } else {
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('./img/bgtile.png')} style={{width: "100%", height: "100%"}} resizeMode="repeat">
      <SafeAreaView style={{ marginTop: 10, paddingBottom: 30}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <Navbar navigate={this.navigate} />
            <History />
          </View>
        </ScrollView>
      </SafeAreaView>
      </ImageBackground>
      </>
    )
  }
  } // render closing tag
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
    paddingHorizontal: 24,
    paddingTop: 10,
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

});

export default App;
