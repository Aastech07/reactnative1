import React, { useState,useRef } from 'react'
import { View, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from "react-native-modal";
import RBSheet from "react-native-raw-bottom-sheet";

const ViewCom = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("")
    const [isModalVisible, setModalVisible] = useState(false);
    const [rbSheet, setRBSheet] = useState(refRBSheet);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModal1 = () => {
        setRBSheet(true)
    };


    const refRBSheet = useRef();





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

<Button title="OPEN BOTTOM SHEET" onPress={() => toggleModal1} />
                                            <RBSheet
                                                ref={refRBSheet}
                                                height={300}
                                                openDuration={250}
                                                customStyles={{
                                                    container: {
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }
                                                }}
                                            >
                                               
                                            </RBSheet>








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
                                    borderRadius: 5, backgroundColor: "#FC345C",
                                    shadowColor: "#FC345C",
                                    shadowOffset: {
                                        width: 0,
                                        height: 50,
                                    },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 16.00,
                                    elevation: 24,
                                    marginLeft: 60,
                                    marginRight: 60,
                                    top: 10, right: 60

                                }} onPress={() => toggleModal()}>
                                    <Text style={{
                                        alignSelf: "center", color: 'white', fontWeight: '700'
                                    }}>Update Sta..</Text>
                                </TouchableOpacity>
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
                                                <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>Report 1:</Text>
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

                                                }}>
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


                            {/* <View style={{ top: 20 }}>
                                <Text style={{ fontWeight: 'bold', }}>{item.Data}</Text>
                                <Text style={{ fontWeight: '500', top: 4 }}>Response:</Text>
                                <TextInput style={styles.input}
                                    placeholder="Response"
                                    onChangeText={text => setText(text)}
                                
                                    value={text}
                                />


                               <View style={{ bottom: 50 }}>
                                    <Text style={{ fontWeight: '700',fontSize:14,top:3 }}>Report 1:</Text>
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
                                        bottom:30,
                                        opacity:0.9
                                    }} onPress={()=>pickImage()}>
                                       <FontAwesome5 name="images" size={21} color="black" style={{  opacity: 0.3 , alignSelf:'center' }} />
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
                                        bottom:71,
                                        
                                    }}>
                                       <FontAwesome5 name="camera" size={21} color="black" style={{  opacity: 0.3 , alignSelf:'center' }} />
                                    </TouchableOpacity>
                                    <View>

                              {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                                    </View>



                                </View>


                                </View >*/}





















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


});