import React from 'react'
import { View, FlatList, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { themeColors } from './Theme/ThemeColor'
const SearchList = ({ navigation }) => {

    const Local_data = [
        {
            id: "0",
            Data: "Leakage in Chilren bathroom",
            SR_No: "89748",
            Project: "OHP",
            Department: "Civil (BD Damodar)",
            Locations: "2003 Preston",
            Name: "Parag joshi",
            Mobile_No: "9892858655",
            Available_Time: "10:00am to 6:00pm"
        },

    ]


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            <FlatList
           
                style={{ height: 500, top: 10 }}
                data={Local_data}
                numColumns={1}
                renderItem={({ item }) => (
                    <Pressable style={styles.container}>
                        <View style={styles.innerContainer}>
                            <Text style={{ fontWeight: 'bold', bottom: 5 }}>{item.Data}</Text>
                            <Text style={{ fontWeight: '500' }}>SR_No:{item.SR_No}</Text>
                            <Text style={{ fontWeight: '500', }}>Project:{item.Project}</Text>
                            <Text style={{ fontWeight: '500', }}>Date : {item.Department}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2 }}>Location :{item.Locations}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2 }}>Name :{item.Name}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2 }}>Mobile_No :{item.Mobile_No}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2 }}>Available_Time :{item.Available_Time}</Text>

                            <TouchableOpacity style={{
                                padding: 5,
                                bottom: 150,
                                borderRadius: 5,
                                backgroundColor:themeColors.bg,
                                shadowColor:themeColors.bg,
                                shadowOffset: {
                                    width: 0,
                                    height: 50,
                                },
                                shadowOpacity: 0.8,
                                shadowRadius: 16.00,
                                elevation: 24,
                                top: 10,
                                paddingLeft: 20,
                                paddingRight: 20,
                                left: 15

                            }}
                                onPress={() => navigation.navigate('ViewCom')}>
                                <Text style={{
                                    alignSelf: "center", color: 'white', fontWeight: '700'
                                }}>View complaint</Text>
                            </TouchableOpacity>

                        </View>
                    </Pressable>)} />


        </View>
    )
}

export default SearchList

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 20,
        paddingLeft: 50,
        paddingRight: 50,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 50,
        },
        shadowOpacity: 0.9,
        shadowRadius: 19.00,
        elevation: 20,
    },
    innerContainer: {
        right: 20,

    }


});