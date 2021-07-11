import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import PostCard from "./PostCard";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let story = require("./temp_stories.json");

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  renderItem = ({ item: story }) => {
    return <PostCard story={story} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground 
              source={require('../assets/cloud.png')}
              style={styles.backgroundImage}
              >
                <View style={styles.appTitle}>
                  <View style={styles.appIcon}>
                    <Image
                      source={require("../assets/logo.png")}
                      style={styles.iconImage}
                    />
                  </View>
                  <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Spectagram</Text>
                  </View>
                </View>
                <View style={styles.cardContainer}>
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={story}
                    renderItem={this.renderItem}
                  />
                </View>
              </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: RFValue(50),
    height: RFValue(50),
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    textAlign:"justify",
  },
  cardContainer: {
    flex: 0.93
  }
});
