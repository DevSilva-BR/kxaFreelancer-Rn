import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Socio1(props) {

    return (

        <View style={styles.container}>
            <View>
                <Image
                    source={props.image}
                    style={styles.image}
                />
            </View>

            <View style={styles.content}>

                <View style={styles.dot}>
                </View>

                <Text style={styles.badge}>professol de historia</Text>
                <Text style={styles.description}>
                    Iago Martin
                </Text>
                <Text style={styles.price}>
                    R$ 954,60
                </Text>
            </View>

        </View>
    );

}
export function Socio2(props) {
    return (

        <View style={styles.container}>
            <View>
                <Image
                    source={props.image}
                    style={styles.image}
                />
            </View>

            <View style={styles.content}>

                <View style={styles.dot}>
                </View>

                <Text style={styles.badge}>Segurança </Text>
                <Text style={styles.description}>
                    Márcio Kevin              </Text>
                <Text style={styles.price}>
                    R$ 954,60
                </Text>
            </View>

        </View>
    );
}

export function Socio3(props) {
    return (

        <View style={styles.container}>
            <View>
                <Image
                    source={props.image}
                    style={styles.image}
                />
            </View>

            <View style={styles.content}>

                <View style={styles.dot}>
                </View>

                <Text style={styles.badge}>Assistência Técnica - Computador</Text>
                <Text style={styles.description}>
                    Daniel Gustavo
                </Text>
                <Text style={styles.price}>
                    R$ 954,60
                </Text>
            </View>

        </View>
    );
}
export function Socio4(props) {
    return (

        <View style={styles.container}>
            <View>
                <Image
                    source={props.image}
                    style={styles.image}
                />
            </View>

            <View style={styles.content}>

                <View style={styles.dot}>
                </View>

                <Text style={styles.badge}>Consultoria - Advogado</Text>
                <Text style={styles.description}>
                    Gael Vinicius                </Text>
                <Text style={styles.price}>
                    R$ 954,60
                </Text>
            </View>

        </View>
    );
}
export function Card(props) {
    return (
        <TouchableOpacity style={styles.container2} onPress={props.onClick}>
            <Image
                style={styles.shoesImg}
                source={require('../assets/ede.svg')}
            />
            <Text style={styles.shoesText}>
                aaaaaaaaaa
            </Text>
            <View opacity={0.4}>
                <Text style={styles.shoesText}> aaaa </Text>
            </View>
        </TouchableOpacity>
    );
}
export function Card2() {
    return (

        <View style={styles.container2}>
            <Text style={styles.Subtitle}>
                profissionais proximo da sua área
            </Text>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>BOX 1</Text>
                </View>
            </View>
        </View>
    );
}
export function Card3() {
    return (

        <View style={styles.container2}>
            <Text style={styles.Subtitle}>
                profissionais proximo da sua área
            </Text>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>BOX 1</Text>
                </View>
            </View>
        </View>
    );
}
export function Card4() {
    return (

        <View style={styles.container2}>
            <Text style={styles.Subtitle}>
                profissionais proximo da sua área
            </Text>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>BOX 1</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
    },
    image: {
        borderRadius: 10,
        width: 60,
        height:60,
    },
    content: {
        width: '65%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: '100%'
    },
    title: {
        fontSize: 12,
        color: '#4f4a4a',
        marginStart: 1000
    },
    description: {
        fontSize: 9,
        color: 'black',
    },
    price: {
        fontSize: 12,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: 'red',
        marginHorizontal: 4,
    },
    badge: {
        color: 'red',
        fontSize: 9,
    },
    container2: {
        marginTop: 20,
        width: '40%',
        height: '20%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'red'
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5
    },
    inner: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg:{
        width: '50%',
        height: '50%',
        //backgroundColor:'black'
    }
})
