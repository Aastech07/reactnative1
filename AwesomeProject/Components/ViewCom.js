import React, { useState, useRef, useEffect } from 'react'
import { View, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';
import { themeColors } from './Theme/ThemeColor';
import { Camera } from 'expo-camera';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const ViewCom = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("")
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [shouldShow, setShouldShow] = useState();
    const [shouldShow1, setShouldShow1] = useState();


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(['Customer not available',
        'Customer requested to Visit Later', 'Need spares', 'Need to revisit', 'Need third party intervention',
        'Out of Warranty', 'Site not ready', 'Rescheduled Visit', 'Under observation ', 'Out of scope ', 'Attended and closed the call ',
        'in Society Scope ', 'Others ',
    ]);
    const [items, setItems] = useState([

        { label: 'Customer not available', value: 'Customer not available' },
        { label: 'Customer requested to Visit Later', value: 'Customer requested to Visit Later', },
        { label: 'Need spares', value: 'Need spares', parent: 'Need spares' },

        { label: 'Need to revisit', value: 'Need to revisit' },
        { label: 'Need third party intervention', value: 'Need third party intervention', },

        { label: 'Out of Warranty', value: 'Out of Warranty' },

        { label: 'Site not ready', value: 'Site not ready' },
        { label: 'Rescheduled Visit', value: 'Rescheduled Visit' },
        { label: 'Under observation ', value: 'Under observation' },
        { label: 'Out of scope ', value: 'Out of scope' },

        { label: 'Attended and closed the call ', value: 'Attended and closed the call' },
        { label: 'in Society Scope ', value: 'in Society Scope' },
        { label: 'Others ', value: 'Others' },

    ]);

    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(['italy', 'spain', 'barcelona', 'finland']);
    const [items1, setItems1] = useState([
        { label: 'Spain', value: 'spain' },
        { label: 'Madrid', value: 'madrid', parent: 'spain' },
        { label: 'Barcelona', value: 'barcelona', parent: 'spain' },

        { label: 'Italy', value: 'italy' },
        { label: 'Rome', value: 'rome', parent: 'italy' },

        { label: 'Finland', value: 'finland' }
    ]);





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

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            <FlatList

                style={{ height: 630, top: 10, }}
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
                                <Text style={{ fontWeight: 'bold', }}>{item.Data}</Text>
                                <Text style={{ fontWeight: '500', top: 4 }}>Date:{item.Date}</Text>
                                <Text style={{ fontWeight: '500', top: 4 }}>Status:{item.Status}</Text>
                                <Text style={{ fontWeight: '500', top: 4 }}>Action:{item.Action}</Text>
                                <Text style={{ fontWeight: '500', top: 4 }}>Update_By:{item.Update_By}</Text>
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
                                        <FlatList
                                            data={Local_data}
                                            numColumns={1}
                                            style={{}}
                                            renderItem={({ item }) => (
                                                <Pressable style={{
                                                    backgroundColor: '#e5e5e5', padding: 15,

                                                }}>
                                                    <View style={{ flex: 1 }}>
                                                        <Text style={{ fontWeight: 'bold', bottom: 5 }}>ADD ACTION AGAINST COMPLAINANT</Text>

                                                        <Text style={{ fontWeight: '500', fontSize: 17 }}>Status:</Text>
                                                        <View style={{
                                                            backgroundColor: '#171717',

                                                            alignItems: 'center',
                                                            justifyContent: 'center',


                                                        }}>
                                                            <DropDownPicker
                                                                open={open}
                                                                value={value}
                                                                items={items}
                                                                setOpen={setOpen}
                                                                setValue={setValue}
                                                                setItems={setItems}
                                                                style={{ padding: 50 }}
                                                                theme="DARK"
                                                                multiple={true}
                                                                mode="BADGE"
                                                                badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}

                                                            />
                                                        </View>
                                                        <Text style={{ fontWeight: '500', fontSize: 17 }}>Ready Response:</Text>
                                                        <View style={{
                                                            backgroundColor: '#171717',
                                                            flex: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',

                                                        }}>
                                                            <DropDownPicker
                                                                open={open1}
                                                                value={value1}
                                                                items={items1}
                                                                setOpen={setOpen1}
                                                                setValue={setValue1}
                                                                setItems={setItems1}
                                                                style={{ padding: 50 }}
                                                                theme="DARK"
                                                                multiple={true}
                                                                mode="BADGE"
                                                                badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}

                                                            />
                                                        </View>
                                                        <Text style={{ fontWeight: '500', fontSize: 17 }}> Response:</Text>
                                                        <TextInput
                                                            multiline={true}
                                                            numberOfLines={5}
                                                            style={{  textAlignVertical: 'top',backgroundColor:themeColors.bg1,borderRadius:6 }} />






                                                    </View>
                                                </Pressable>)} /> : null}
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
                                    top: 10,

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
                    </Pressable>)} />


        </View>
    )
}

export default ViewCom;

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
    }

});