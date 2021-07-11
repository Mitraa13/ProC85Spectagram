import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostScreen extends Component {
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

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitleContainer}>
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
            <View style={styles.titleContainer}>

                <View style={styles.appTitle}>

                    <View style={styles.profileContainer}>
                    <Image
                        source={require("../assets/profile_img.png")}
                        style={styles.profileicon}
                    />
                    </View>

                    <View style={styles.postAuthorTextContainer}>
                    <Text style={styles.postAuthorText}>{this.props.route.params.story.author}</Text>
                    </View>

                </View>

                <Image
                source={{uri: this.props.route.params.story.image}}
                style={styles.postImage}
                />

                <Text style={styles.postDescription}>
                    {this.props.route.params.story.description}
                </Text>

            </View>

            <TouchableOpacity style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </TouchableOpacity>
            
          </View>
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
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
    marginTop:RFValue(20)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  appTitle: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent:"center"
  },
  appTitleContainer: {
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
  profileContainer: {
    flex: 0.3,
    justifyContent: "center",
  },
  profileicon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: "contain", 
    marginTop:20,
    borderRadius:RFValue(15)
  },
  postAuthorTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    padding:1,
  },
  postAuthorText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white", 
    marginLeft:-60,   
    marginTop:20,
  },
  postImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
    marginTop:RFValue(20),
    marginLeft:RFValue(10),
  },
  postDescription: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white",
    paddingTop: RFValue(10),
    paddingLeft:10,
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
    marginBottom:20,
  }, 
  likeButton: { 
    width: RFValue(160), 
    height: RFValue(40), 
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection: "row", 
    backgroundColor: "#eb3948", 
    borderRadius: RFValue(30),
  }, 
  likeText: { 
    color: "white", 
    fontFamily: "Bubblegum-Sans", 
    fontSize: RFValue(25), 
    marginLeft: RFValue(5) 
  }
})