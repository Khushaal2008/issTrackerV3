import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,StatusBar,Platform,ImageBackground,Image } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground style={styles.backgroundImage}source={require("../assets/bg_image.png")}>
            <View style={styles.titleBar}>
              <Text style={styles.titleText}>Iss Tracker App</Text>

            </View>
                
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("IssLocationScreen")} style={styles.routeCard}>
                    <Text style={styles.routeText}>
                        Iss Location
                    </Text>
                    <Text style={styles.knowMore}>{"Know More -->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                      <Image
                      style={styles.iconImage}
                      source={require("../assets/iss_icon.png")}
                      />
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("MeteorScreen")} style={styles.routeCard}>
                    <Text style={styles.routeText}>Meteor</Text>
                    <Text style={styles.knowMore}>{"Know More -->"}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/meteor_icon.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("UpdateScreen")} style={styles.routeCard}>
                    <Text style={styles.routeText}>Updates</Text>
                    <Text style={styles.knowMore}>{"Know More -->"}</Text>
                    <Text style={styles.bgDigit}>3</Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/rocket_icon.png")}
                    />
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    droidSafeArea:{
        marginTop : Platform.OS === "android" ? StatusBar.currentHeight:0
    },
    routeCard:{
        flex:1,
        backgroundColor:"white",
        borderRadius:30,
        marginTop:50,
        marginLeft:50,
        marginRight:50,
    },
    routeText:{
        fontWeight:'bold',
        fontSize:30,
        color:"black",
        marginTop:75,
        paddingLeft:30
    },
    knowMore:{
        color:"red",
        fontSize:15,
        paddingLeft:30,
    },
    bgDigit:{
        fontSize:150,
        zIndex:-1,
        color:"rgba(183,183,183,0.5)",
       right:20,
        position:"absolute"
        },
       titleText:{
        fontSize:40,
        color:"white",
        fontWeight:"bold",
        },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    
    
})