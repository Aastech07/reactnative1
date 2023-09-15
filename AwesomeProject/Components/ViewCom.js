import React, { useState, useRef, useEffect } from 'react'
import { View, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, Image, Button, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';
import { themeColors } from './Theme/ThemeColor';
import { Camera } from 'expo-camera';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const data = [
    { label: 'Select Status', value: '1' },
    { label: 'Customer not available', value: '2' },
    { label: 'Customer requested to Visit Later', value: '3' },
    { label: 'Need spares', value: '4' },
    { label: 'Need to revisit', value: '5' },
    { label: 'Need third party intervention', value: '6' },
    { label: 'Out of Warranty', value: '7' },
    { label: 'Site not ready', value: '8' },
    { label: 'Rescheduled Visit', value: '9' },
    { label: 'Under Observation', value: '10' },
    { label: 'Out of scope', value: '11' },
    { label: 'Attended and closed the call', value: '12' },
    { label: 'in Society Scope', value: '13' },
    { label: 'others', value: '14' },
];

const data1 = [
    { label: 'Select Status', value1: '1' },
    { label: 'Customer not available', value1: '2' },
    { label: 'Customer requested to Visit Later', value1: '3' },
    { label: 'Need spares', value1: '4' },
    { label: 'Need to revisit', value1: '5' },
    { label: 'Need third party intervention', value1: '6' },
    { label: 'Out of Warranty', value1: '7' },
    { label: 'Site not ready', value1: '8' },
    { label: 'Rescheduled Visit', value1: '9' },
    { label: 'Under Observation', value1: '10' },
    { label: 'Out of scope', value1: '11' },
    { label: 'Attended and closed the call', value1: '12' },
    { label: 'in Society Scope', value1: '13' },
    { label: 'others', value1: '14' },
];

const data2 = [
    { label: 'Select Status', value2: '1' },
    { label: 'Customer not available', value2: '2' },
    { label: 'Customer requested to Visit Later', value2: '3' },
    { label: 'Need spares', value2: '4' },
    { label: 'Need to revisit', value2: '5' },
    { label: 'Need third party intervention', value2: '6' },
    { label: 'Out of Warranty', value2: '7' },
    { label: 'Site not ready', value2: '8' },
    { label: 'Rescheduled Visit', value2: '9' },
    { label: 'Under Observation', value2: '10' },
    { label: 'Out of scope', value2: '11' },
    { label: 'Attended and closed the call', value2: '12' },
    { label: 'in Society Scope', value2: '13' },
    { label: 'others', value2: '14' },
];



const ViewCom = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("")
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [shouldShow, setShouldShow] = useState();
    const [shouldShow1, setShouldShow1] = useState();
    const [shouldShow2, setShouldShow2] = useState();
    const [Personname, setPersoneName] = useState();
    const [techPerson, setTechPersonNo] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [value1, setValue1] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [value2, setValue2] = useState(null);
    const [isFocus2, setIsFocus2] = useState(false);
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: themeColors.bg }]}>
                    Dropdown List
                </Text>
            );
        }
        return null;
    };
    const renderLabel1 = () => {
        if (value1 || isFocus1) {
            return (
                <Text style={[styles.label1, isFocus1 && { color: themeColors.bg }]}>
                    Dropdown List
                </Text>
            );
        }
        return null;
    };
    const renderLabel2 = () => {
        if (value2 || isFocus2) {
            return (
                <Text style={[styles.label1, isFocus2 && { color: themeColors.bg }]}>
                    Dropdown List
                </Text>
            );
        }
        return null;
    };
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
            Available_Time: "10:00am to 6:00pm",
            Date: "24-Aug-2023 09:02am",
            Status: "Assigned",
            Action: "Assigned to BD Damodar - 9702854850",
            Update_By: "System"

        },
    ]
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };


    return (
        <ScrollView style={{ flex: 1 }}>

            <FlatList

                style={{}}
                data={Local_data}
                numColumns={1}
                renderItem={({ item }) => (
                    <Pressable style={{
                        margin: 5, marginHorizontal: 15, left: 20
                    }}>

                        <View style={styles.innerContainer}>
                            <Text style={{ fontWeight: 'bold', bottom: 5, fontSize: responsiveFontSize(2) }}>{item.Data}</Text>
                            <Text style={{ fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>SR_No:{item.SR_No}</Text>
                            <Text style={{ fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>Project:{item.Project}</Text>
                            <Text style={{ fontWeight: '500', fontSize: responsiveFontSize(1.9) }}>Date : {item.Department}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2, fontSize: responsiveFontSize(1.9) }}>Location :{item.Locations}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2, fontSize: responsiveFontSize(1.9) }}>Name :{item.Name}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2, fontSize: responsiveFontSize(1.9) }}>Mobile_No :{item.Mobile_No}</Text>
                            <Text style={{ fontWeight: '500', bottom: 2, fontSize: responsiveFontSize(1.9) }}>Available_Time :{item.Available_Time}</Text>

                            <View style={{
                                borderBottomWidth: 1, top: 4,
                                backgroundColor: "#FC345C",
                                shadowColor: "#FC345C",
                                shadowOffset: {
                                    width: 0,
                                    height: 50,
                                },
                                shadowOpacity: 0.9,
                                shadowRadius: 19.00,
                                elevation: 20,
                            }}>

                            </View>
                            <View style={{ top: 8 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>{item.Data}</Text>
                                <Text style={{ fontWeight: '500', top: 4, fontSize: responsiveFontSize(1.9) }}>Date:{item.Date}</Text>
                                <Text style={{ fontWeight: '500', top: 4, fontSize: responsiveFontSize(1.9) }}>Status:{item.Status}</Text>
                                <Text style={{ fontWeight: '500', top: 4, fontSize: responsiveFontSize(1.9) }}>Action:{item.Action}</Text>
                                <Text style={{ fontWeight: '500', top: 4, fontSize: responsiveFontSize(1.9) }}>Update_By:{item.Update_By}</Text>
                            </View>


                            <View style={{
                                borderBottomWidth: 1, top: 17,
                                backgroundColor: "#FC345C",
                                shadowColor: "#FC345C",
                                shadowOffset: {
                                    width: 0,
                                    height: 50,
                                },
                                shadowOpacity: 0.9,
                                shadowRadius: 19.00,
                                elevation: 20,
                            }}>
                            </View>

                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={{
                                    marginTop: 10, padding: 5,
                                    borderRadius: 5, backgroundColor: themeColors.bg1,
                                    shadowColor: themeColors.bg1,
                                    shadowOffset: {
                                        width: 0,
                                        height: 50,
                                    },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 16.00,
                                    elevation: 24,
                                    top: 10,
                                }} onPress={() => setShouldShow1(!shouldShow1)}>
                                    <Text style={{
                                        alignSelf: "center", color: 'white', fontWeight: '700'
                                    }}>Update Status</Text>
                                </TouchableOpacity>

                                <View style={{ marginTop: 10 }}>
                                    {shouldShow1 ?

                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontWeight: 'bold', }}>ADD ACTION AGAINST COMPLAINANT</Text>

                                            <Text style={{ fontWeight: '500', fontSize: 17 }}>Status:</Text>

                                            <View style={styles.container}>
                                                {renderLabel()}
                                                <Dropdown
                                                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                                    placeholderStyle={styles.placeholderStyle}
                                                    selectedTextStyle={styles.selectedTextStyle}
                                                    inputSearchStyle={styles.inputSearchStyle}
                                                    iconStyle={styles.iconStyle}
                                                    data={data}
                                                    search
                                                    maxHeight={300}
                                                    labelField="label"
                                                    valueField="value"
                                                    placeholder={!isFocus ? 'Select item' : '...'}
                                                    searchPlaceholder="Search..."
                                                    value={value}
                                                    onFocus={() => setIsFocus(true)}
                                                    onBlur={() => setIsFocus(false)}
                                                    onChange={item => {
                                                        setValue(item.value);
                                                        setIsFocus(false);
                                                    }}
                                                    renderLeftIcon={() => (
                                                        <AntDesign
                                                            style={styles.icon}
                                                            color={isFocus ? 'blue' : 'black'}
                                                            name="Safety"
                                                            size={20}
                                                        />
                                                    )}
                                                />
                                            </View>

                                            <Text style={{ fontWeight: '500', fontSize: 17 }}>Ready Response:</Text>
                                            <View style={styles.container}>
                                                {renderLabel1()}
                                                <Dropdown
                                                    style={[styles.dropdown, isFocus1 && { borderColor: 'blue' }]}
                                                    placeholderStyle={styles.placeholderStyle}
                                                    selectedTextStyle={styles.selectedTextStyle}
                                                    inputSearchStyle={styles.inputSearchStyle}
                                                    iconStyle={styles.iconStyle}
                                                    data={data1}
                                                    search
                                                    maxHeight={300}
                                                    labelField="label"
                                                    valueField="value1"
                                                    placeholder={!isFocus1 ? 'Select item' : '...'}
                                                    searchPlaceholder="Search..."
                                                    value={value1}
                                                    onFocus={() => setIsFocus1(true)}
                                                    onBlur={() => setIsFocus1(false)}
                                                    onChange={item => {
                                                        setValue1(item.value1);
                                                        setIsFocus1(false);
                                                    }}
                                                    renderLeftIcon={() => (
                                                        <AntDesign
                                                            style={styles.icon}
                                                            color={isFocus1 ? 'blue' : 'black'}
                                                            name="Safety"
                                                            size={20}
                                                        />
                                                    )}
                                                />
                                            </View>

                                            <Text style={{ fontWeight: '500', fontSize: 17 }}> Response:</Text>
                                            <TextInput
                                                multiline={true}
                                                numberOfLines={5}
                                                style={{ textAlignVertical: 'top', backgroundColor: '#fff', borderRadius: 6 }} />


                                            <TouchableOpacity style={{
                                                marginTop: 10, padding: 5,
                                                borderRadius: 5, backgroundColor: "#FC345C",
                                                shadowColor: "#FC345C",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 50,
                                                },
                                                shadowOpacity: 0.8,
                                                shadowRadius: 16.00,
                                                elevation: 24,
                                            }} onPress={() => setShouldShow2(!shouldShow2)}>
                                                <Text style={{
                                                    alignSelf: "center", color: 'white', fontWeight: '700'
                                                }}>Send Technical..</Text>
                                            </TouchableOpacity>

                                            {shouldShow2 ? <View style={{ alignContent: 'center', justifyContent: 'center', marginTop: 50, marginBottom: 50 }}>



                                                <View style={{ left: responsiveWidth(30), }}>
                                                    <Text style={{ fontWeight: '500', bottom: responsiveHeight(3), right: responsiveWidth(21), }}> Person Name:</Text>
                                                    <FontAwesome5 name="signature" size={25} color="#FC345C" style={{ right: responsiveWidth(14), opacity: 0.5, bottom: 10, }} />
                                                    <TextInput style={{
                                                        right: 100,
                                                        borderBottomWidth: 1,
                                                        alignSelf: 'center',
                                                        padding: 4,
                                                        marginLeft: 87,
                                                        marginRight: 87, position: 'absolute'
                                                    }}
                                                        placeholder="Technical Person Name"
                                                        onChangeText={text => setPersoneName(text)}
                                                        value={Personname}
                                                    />
                                                </View>

                                                <View style={{ left: responsiveWidth(30), top: 20 }}>
                                                    <Text style={{ fontWeight: '500', bottom: responsiveHeight(3), right: responsiveWidth(20), }}>Person No:</Text>
                                                    <FontAwesome5 name="list-ol" size={25} color="#FC345C" style={{ right: responsiveWidth(14), opacity: 0.5, bottom: 10, }} />
                                                    <TextInput style={{
                                                        right: 122,
                                                        borderBottomWidth: 1,
                                                        alignSelf: 'center',
                                                        padding: 4,
                                                        marginLeft: 110,
                                                        marginRight: 110, position: 'absolute',
                                                    }}
                                                        placeholder="Tech Person No"
                                                        onChangeText={text => setTechPersonNo(text)}
                                                        value={techPerson}
                                                        keyboardType='numeric'
                                                    />
                                                </View>
                                                <View style={{ alignContent: 'center', alignItems: 'center', top: 35, left: 15 }}>
                                                    <TouchableOpacity style={{
                                                        padding: 8,
                                                        borderRadius: 5, backgroundColor: "#FC345C",
                                                        shadowColor: "#FC345C",
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 50,
                                                        },
                                                        shadowOpacity: 0.8,
                                                        shadowRadius: 16.00,
                                                        elevation: 24,
                                                        paddingLeft: 60, paddingRight: 60,
                                                        top: 45
                                                    }} onPress={showDatePicker}>
                                                        <Text style={{
                                                            alignSelf: "center", color: 'white', fontWeight: '700'
                                                        }}>Date</Text>
                                                    </TouchableOpacity>
                                                    <Text style={{ fontSize: 24, fontWeight: 'bold', bottom: 40 }}>
                                                        {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
                                                    </Text>
                                                    <Text style={{ fontWeight: '500', bottom: responsiveHeight(7), right: responsiveWidth(35), }}>Date:</Text>
                                                    <FontAwesome5 name="table" size={25} color="#FC345C" style={{ left: responsiveWidth(12), opacity: 0.5, bottom: 10, position: 'absolute' }} />
                                                    <DateTimePickerModal
                                                        isVisible={isDatePickerVisible}
                                                        mode='date'
                                                        onConfirm={handleConfirm}
                                                        onCancel={hideDatePicker}
                                                        date={selectedDate}
                                                    />
                                                </View>

                                                <View style={{ alignContent: 'center', justifyContent: 'center' ,top:35}}>
                                                    <Text style={{ fontWeight: '500', fontSize: 17 }}>Ready Response:</Text>
                                                    <View style={styles.container}>
                                                        {renderLabel2()}
                                                        <Dropdown
                                                            style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
                                                            placeholderStyle={styles.placeholderStyle}
                                                            selectedTextStyle={styles.selectedTextStyle}
                                                            inputSearchStyle={styles.inputSearchStyle}
                                                            iconStyle={styles.iconStyle}
                                                            data={data2}
                                                            search
                                                            maxHeight={300}
                                                            labelField="label"
                                                            valueField="value2"
                                                            placeholder={!isFocus2 ? 'Select item' : '...'}
                                                            searchPlaceholder="Search..."
                                                            value={value2}
                                                            onFocus={() => setIsFocus2(true)}
                                                            onBlur={() => setIsFocus2(false)}
                                                            onChange={item => {
                                                                setValue2(item.value2);
                                                                setIsFocus2(false);
                                                            }}
                                                            renderLeftIcon={() => (
                                                                <AntDesign
                                                                    style={styles.icon}
                                                                    color={isFocus2 ? 'blue' : 'black'}
                                                                    name="Safety"
                                                                    size={20}
                                                                />
                                                            )}
                                                        />
                                                    </View>
                                                </View>

                                            </View> : null}

                                        </View>
                                        : null}
                                </View>

                                <TouchableOpacity style={{
                                    marginTop: 10, padding: 5,
                                    borderRadius: 5, backgroundColor: themeColors.bg,
                                    shadowColor: themeColors.bg,
                                    shadowOffset: {
                                        width: 0,
                                        height: 50,
                                    },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 16.00,
                                    elevation: 24,


                                }} onPress={() => setShouldShow(!shouldShow)}>
                                    <Text style={{
                                        alignSelf: "center", color: 'white', fontWeight: '700'
                                    }}>RE-ASSIGN COMPLAINANT</Text>
                                </TouchableOpacity>




                                <View style={{ marginTop: 10 }}>
                                    {shouldShow ?
                                        <FlatList
                                            style={{ height: 665 }}


                                            renderItem={({ }) => (
                                                <Pressable style={{
                                                    backgroundColor: '#e5e5e5', padding: 15, borderRadius: 15,
                                                    margin: 5, marginHorizontal: 10,
                                                }}>
                                                    <View style={{}}>
                                                        <Text style={{ fontWeight: 'bold', top: 6 }}>{ }</Text>
                                                        <Text style={{ fontWeight: 'bold', left: 250 }}></Text>
                                                        <Text style={{ fontWeight: 'bold', bottom: 10 }}>{ }</Text>
                                                        <Text style={{ fontWeight: 'bold', bottom: 5 }}>{ }</Text>
                                                        <Text style={{ fontWeight: 'bold', bottom: 4 }}>{ }</Text>
                                                        <Text style={{ fontWeight: 'bold' }}>{ }</Text>
                                                        <Text style={{ fontWeight: 'bold', top: 5 }}>{ }</Text>

                                                    </View>
                                                </Pressable>)} /> : null}
                                </View>



                                <Modal isVisible={isModalVisible}>
                                    <View style={{ flex: 1 }}>
                                        <Text>Hello!</Text>

                                        <TouchableOpacity onPress={() => toggleModal()}>
                                            <FontAwesome5 name='arrow-left' size={26} color={"white"} style={{ position: 'absolute', bottom: 5 }} />
                                        </TouchableOpacity>

                                        <View style={{ top: 40 }}>
                                            <Text style={{ fontWeight: 'bold', color: 'white' }}>{item.Data}</Text>
                                            <Text style={{ fontWeight: '500', top: 16, color: "white", fontSize: 16 }}>Response:</Text>
                                            <TextInput style={styles.input}
                                                placeholder="Response"
                                                onChangeText={text => setText(text)}
                                                value={text}
                                            />

                                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 100 }}>
                                                <Text style={{ fontWeight: '700', fontSize: 14, color: 'white', right: responsiveWidth(25), top: 5 }}>Report 1:</Text>
                                                <TouchableOpacity style={{
                                                    marginTop: 10, padding: 5,
                                                    borderRadius: 5, backgroundColor: "#FC345C",
                                                    marginLeft: 70, marginRight: 70,
                                                    shadowColor: "#FC345C",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 50,
                                                    },
                                                    shadowOpacity: 0.8,
                                                    shadowRadius: 16.00,
                                                    elevation: 24,
                                                    left: 10,
                                                    bottom: 30,
                                                    opacity: 0.9
                                                }} onPress={() => pickImage()}>
                                                    <FontAwesome5 name="images" size={21} color="black" style={{ opacity: 0.3, alignSelf: 'center' }} />
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{
                                                    marginTop: 10, padding: 5,
                                                    borderRadius: 5, backgroundColor: "#FC345C",
                                                    marginLeft: 70, marginRight: 70,
                                                    shadowColor: "#FC345C",
                                                    shadowOffset: {
                                                        width: 0,
                                                        height: 50,
                                                    },
                                                    shadowOpacity: 0.8,
                                                    shadowRadius: 16.00,
                                                    elevation: 24,
                                                    left: 100,
                                                    bottom: 71,

                                                }} onPress={() => navigation.navigate('Data')}>
                                                    <FontAwesome5 name="camera" size={21} color="black" style={{ opacity: 0.3, alignSelf: 'center' }} />
                                                </TouchableOpacity>
                                                <View>

                                                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                                                </View>



                                            </View>


                                        </View >


                                    </View>

                                </Modal>




                            </View>

                        </View>

                    </Pressable>)}
            />


        </ScrollView>
    )
}

export default ViewCom;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#fff',





    },
    innerContainer: {
        right: 20,



    }, input: {
        marginLeft: 50,
        marginRight: 50,
        padding: 5,
        bottom: 10,
        left: 30,
        borderRadius: 8,
        backgroundColor: 'white'
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    }, container: {



    },
    dropdown: {
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 8,

        top: responsiveHeight(0.5)


    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: '#fff',
        left: 30,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        borderBottomColor: 'gray',
        borderWidth: 1,
    },
    label1: {
        position: 'absolute',
        backgroundColor: '#fff',
        left: 30,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        borderBottomColor: 'gray',
        borderWidth: 1,

    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

});