import React from 'react'
import { View, FlatList, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { themeColors } from './Theme/ThemeColor';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
} from 'react-native-reanimated';
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
        {
            id: "1",
            Data: "Leakage in Chilren bathroom",
            SR_No: "89748",
            Project: "OHP",
            Department: "Civil (BD Damodar)",
            Locations: "2003 Preston",
            Name: "Parag joshi",
            Mobile_No: "9892858655",
            Available_Time: "10:00am to 6:00pm"
        }, {
            id: "2",
            Data: "Leakage in Chilren bathroom",
            SR_No: "89748",
            Project: "OHP",
            Department: "Civil (BD Damodar)",
            Locations: "2003 Preston",
            Name: "Parag joshi",
            Mobile_No: "9892858655",
            Available_Time: "10:00am to 6:00pm"
        }, {
            id: "3",
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
    const offset = useSharedValue(200);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }));

    React.useEffect(() => {
        offset.value = withRepeat(
            withTiming(-offset.value, { duration: 1500 }),
            -1,
            true
        );
    }, []);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                style={{ height: responsiveHeight(90), top: 10, }}
                data={Local_data}
                numColumns={1}
                renderItem={({ item }) => (
                    <Pressable style={styles.container}>
                        <View style={styles.innerContainer}>
                            <Text style={{ fontWeight: 'bold', bottom: 5, fontSize: responsiveFontSize(2) }}>{item.Data}</Text>
                            <Text style={{ fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>SR_No:{item.SR_No}</Text>
                            <Text style={{ fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>Project:{item.Project}</Text>
                            <Text style={{ fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>Date : {item.Department}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2, fontSize: responsiveFontSize(1.9) }}>Location :{item.Locations}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2, fontSize: responsiveFontSize(1.9) }}>Name :{item.Name}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2, fontSize: responsiveFontSize(1.9) }}>Mobile_No :{item.Mobile_No}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2, fontSize: responsiveFontSize(1.9) }}>Available_Time :{item.Available_Time}</Text>

                            <TouchableOpacity style={{
                                padding: 5,
                                bottom: 150,
                                borderRadius: 5,
                                backgroundColor: themeColors.bg,
                                shadowColor: themeColors.bg,
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
        borderRadius: 8,
        margin: 5,
        marginHorizontal: 20,
       
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