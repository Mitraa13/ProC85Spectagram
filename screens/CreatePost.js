import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  ImageBackground
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import DropDownPicker from 'react-native-dropdown-picker';

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      preview_images:"image_1",
      dropDownHeight:40,
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
        let preview_image = {image_1: require('../assets/image_1.jpg'),
                             image_2: require('../assets/image_2.jpg'),
                             image_3: require('../assets/image_3.jpg'),
                             image_4: require('../assets/image_4.jpg'),
                             image_5: require('../assets/image_5.jpg'),
                             image_6: require('../assets/image_6.jpg'),
                             image_7: require('../assets/image_7.jpg'),
                             image_8: require('../assets/post.jpeg')}          
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.appTitle}>

            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              />
            </View>

            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Story</Text>
            </View>

          </View>

          <View style={styles.fieldContainer}>
            <ScrollView>
                <Image 
                    source={preview_image[this.state.preview_images]}
                    style={styles.previewImage}
                />
                <View style={{height:RFValue(this.state.dropDownHeight)}}>
                <DropDownPicker
                  items={[
                    { label: "Image 1", value: "image_1" },
                    { label: "Image 2", value: "image_2" },
                    { label: "Image 3", value: "image_3" },
                    { label: "Image 4", value: "image_4" },
                    { label: "Image 5", value: "image_5" },
                    { label: "Image 6", value: "image_6" },
                    { label: "Image 7", value: "image_7" },
                    { label: "Image 8", value: "image_8" }
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10,
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: "transparent", }}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#2a2a2a" }}
                  labelStyle={{
                    color: "white",
                  }}
                  onChangeItem={item =>
                    this.setState({
                      preview_images: item.value
                    })
                  }
                />
                </View>
                <TextInput 
                    style={styles.inputFont}
                    onChangeText={description=>
                        this.setState({
                            description
                        })
                    }
                    placeholder={"Caption"}
                    placeholderTextColor="white"
                    multiline={true}
                    numberOfLines={10}
                />
            </ScrollView>
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
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldContainer:{
    flex:0.85
  },
  previewImage:{
    width:'90%',
    height:RFValue(250),
    alignSelf:"center",
    borderRadius:RFValue(10),
    marginVertical:RFValue(10),
    resizeMode:"contain",
  },
  inputFont:{
    height:RFValue(60),
    borderColor:"white",
    borderWidth:RFValue(1),
    borderRadius:RFValue(10),
    padding:RFValue(10),
    color:"white",
    fontFamily:'Bubblegum-Sans',
    marginBottom:RFValue(10),
    marginTop:RFValue(20),
  },
});
