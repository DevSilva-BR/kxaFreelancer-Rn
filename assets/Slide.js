import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
    {
        key: "1",
        title: "tela1",
        text: "Lacinia purus nostra suscipit dignissim ac aenean proin. Conubia eget rhoncus integer torquent luctus. Hendrerit cubilia ornare sit habitant pede laoreet tellus scelerisque. Suspendisse libero blandit ornare bibendum eget nullam finibus dui donec litora. Cubilia urna ac tincidunt lacinia habitant netus.",
        image: require("./assets/src/1.png"),
    },
    {
        key: "2",
        title: "tela 2",
        text: "Ligula imperdiet blandit purus massa feugiat hendrerit adipiscing. Arcu habitasse ornare gravida eros maximus pharetra lorem aptent tristique facilisis consequat. Tempor magna volutpat cursus vulputate pede penatibus quis suscipit vehicula netus litora. ",
        image: require("./assets/src/2.png"),
    },
    {
        key: "3",
        title: "tela1",
        text: "Ligula imperdiet blandit purus massa feugiat hendrerit adipiscing. Arcu habitasse ornare gravida eros maximus pharetra lorem aptent tristique facilisis consequat. Tempor magna volutpat cursus vulputate pede penatibus quis suscipit vehicula netus litora. ",
        image: require("./assets/src/3.png"),
    },
    {
        key: "4",
        title: "tela1",
        text: "Ligula imperdiet blandit purus massa feugiat hendrerit adipiscing. Arcu habitasse ornare gravida eros maximus pharetra lorem aptent tristique facilisis consequat. Tempor magna volutpat cursus vulputate pede penatibus quis suscipit vehicula netus litora. ",
        image: require("./assets/src/4.png"),
    },
];

export default function slide() {
    const navigation = useNavigation();
    const [showHomePage, setShowHomePage] = useState(false);

    function renderSlides({ item }) {
        return (
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        paddingTop: 30,
                        paddingBottom: 10,
                        fontSize: 23,
                        fontWeight: "bold",
                        color: "#009CFF",
                        alignSelf: "center",
                    }}
                >
                    {item.title}
                </Text>
                <Image
                    source={item.image}
                    style={{
                        height: "59%",
                        width: "100%",
                        justifyContent: "center",
                    }}
                />

                <Text
                    style={{
                        justifyContent: "flex-start",
                        color: "black",
                        paddingHorizontal: 11,
                        fontSize: 14,
                    }}
                >
                    {item.text}
                </Text>
            </View>
        );
    }

    if (!showHomePage) {
        //pagina do login
        return <Router />;
    } else {
        return (
            <AppIntroSlider
                renderItem={renderSlides}
                data={slides}
                activeDotStyle={{
                    backgroundColor: "red",
                    width: 10,
                }}
                //renderNextButton={()=> <Text style={{color:'red', fontSize:18, fontWeight: 'bold' }}>Proximo</Text>}

                //renderDoneButton={()=><Text
                //style={{color:'red', fontSize:18, fontWeight: 'bold' }}>Acessa!</Text>}

                showSkipButton
                renderNextButton={() => <Text>Next</Text>}
                renderSkipButton={() => <Text>pular</Text>}
                renderDoneButton={() => <Text>Acessa</Text>}
                onDone={() => {
                    setShowHomePage(false);
                }}
            ></AppIntroSlider>
        );
    }
    // return(

    //)
}
