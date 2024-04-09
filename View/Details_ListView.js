import React from 'react';
import { useRoute } from '@react-navigation/native';
import {View, Text, StyleSheet,Image, TouchableOpacity, FlatList} from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';

export default function ViewDetails({navigation}){
    const insets = useSafeAreaInsets();
    const route = useRoute();
    const { personData } = route.params;

    const navigateBack = () => {
        navigation.navigate('List');
    };

    return (
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <View style={styles.contents}>
                <TouchableOpacity style={styles.hback} onPress={navigateBack}>
                    <Image source={require('../ViewModel/images/back.png')} style={styles.back}></Image>
                </TouchableOpacity>

                <View style={styles.innercontent}>
                    <Image style={styles.profile} source={personData.picture} />
                    <View style={styles.info}>
                        <Text style={styles.texts}>Name: {personData.firstName} {personData.lastName}</Text>  
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.texts}>Age: {personData.age}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.texts}>Birthday: {personData.birthDate}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.texts}>Address: {personData.address}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.texts}>Motto in Life: {personData.motto}</Text>
                    </View>
                </View>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#04364A",
    },
    profile:{
        width: 200, 
        height: 200, 
        resizeMode: 'cover',
        borderRadius:20,
        borderWidth:1.5,
        borderColor:"#FFFFFF",
        marginBottom:20,
       
    },
    contents:{
        width:"100%",
        height:"100%",
        paddingLeft:20,
        paddingRight:20,

    },
    info:{
        marginTop:8,
        width:"100%",
        padding:10,
        backgroundColor:"#FFFFFF",
        borderRadius:5,
        height:60,
        justifyContent:"center",
    },
    texts:{
        fontSize:16,
    },
    back:{
        width:20,
        height:20,
        resizeMode: 'contain',
        transform: [{ rotate: '180deg' }]
        
    },
    hback:{
        width:"100%",
        marginTop:20,
    },
    innercontent:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        marginTop:70,
    }
});
