import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity, FlatList} from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
import { getData } from '../Model/PassData';


export default function MainList({ navigation }){
    const insets = useSafeAreaInsets();
    
    const [people, setPeople] = useState([]);

    useEffect(() => {
        let data = [];
        for (let i = 0; i < 10; i++) {
            const personData = getData(i); 
            data.push({
                id: i,
                firstName: personData.firstName,
                lastName: personData.lastName,
                birthDate: personData.birthDate,
                motto: personData.motto,
                age:personData.age,
                address:personData.address,
                picture:personData.picture,
            });
        }
        setPeople(data);
    }, []);

    const handlePress = (personData) => {
        navigation.navigate('Details', { personData });
    };

    return(
        <View style={[styles.container, {paddingTop: insets.top,paddingBottom: insets.bottom,paddingLeft: insets.left,paddingRight: insets.right,}]}>
            <View style={styles.contents}>
            <FlatList
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)} style={styles.row}>  
                        <Image style={styles.profile} source={item.picture} />
                        <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
                    </TouchableOpacity>
                )}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFFFFF",
    },
    profile:{
        width: 75, 
        height: 75, 
        resizeMode: 'cover',
        borderRadius:50,
        borderColor:"#FFFFFF",
        borderWidth:1,
    },
    contents:{
        width:"100%",
        height:"100%",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
    },
    row:{
        backgroundColor:"#04364A",
        flexDirection:"row",
        marginBottom:10,
        padding:10,
        justifyContent:"flex-start",
        alignItems:'center',
        gap:15,
        borderRadius:10,
    },
    name:{
        fontSize:18,
        fontWeight:"400",
        color:"#FFFFFF",
    },
    
    
});
  