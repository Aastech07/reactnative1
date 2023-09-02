import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Pressable, Button } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Local_data = [
  {
    id: "0",
    SR_No: "89748",
    Project: "OHP",
    Department: "Civil (BD Damodar)",
    Locations: "2003 Preston",
    Name: "Parag joshi",
    Mobile_No: "9892858655",
    Available_Time: "10:00am to 6:00pm"
  },
  {
    value: '1',
    lable: 'Country 1',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '2',
    lable: 'Country 2',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '3',
    lable: 'Country 3',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '4',
    lable: 'Country 4',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '5',
    lable: 'Country 5',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
];


const Search = ({ navigation }) => {
  const [project, setProject] = useState('');

  const [flat, setFlatNo] = useState("");
  const [building, setBuilding] = useState("");
  const [service, setService] = useState("");
  const [number, setNUmber] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pendingcomp, setPendingComp] = useState("");




  return (
    <ScrollView style={{}}>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          padding: 65, borderRadius: 15, opacity: 0.9,
          backgroundColor: '#Fff',
          shadowColor: "#FC345C",
          shadowOffset: {
            width: 0,
            height: 50,
          },
          shadowOpacity: 0.8,
          shadowRadius: 16.00,
          elevation: 24,
          marginTop: 10,
          marginBottom: 100


        }}>
          <View style={{ bottom: 70 }}>
            <View style={{ bottom: 20 }}>
              <FontAwesome5 name="project-diagram" size={24} color="#FC345C" style={{ right: 25, top: 65, opacity: 0.5, }} />
              <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={project}
                data={Local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="OHP"
                searchPlaceholder="Search..."
                onChange={e => {
                  setProject(e.value);

                }}
              />
            </View>

            <View style={{ bottom: 50 }}>
              <FontAwesome5 name="building" size={24} color="#FC345C" style={{ right: 25, top: 65, opacity: 0.5, }} />
              <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={building}
                data={Local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Select Building"
                searchPlaceholder="Search..."
                onChange={e => {
                  setBuilding(e.value);
                }}
              />

            </View>


            <View style={{ bottom: 70 }}>
              <FontAwesome5 name="sort-numeric-up-alt" size={24} color="#FC345C" style={{ right: 25, top: 55, opacity: 0.5, }} />
              <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={flat}
                data={Local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Flat No"
                searchPlaceholder="Search..."
                onChange={e => {
                  setFlatNo(e.value);
                }}
              />
            </View>
          </View>



          <View style={{ bottom: 70 }}>

            <View style={{ bottom: 10 }}>
              <FontAwesome5 name="poll" size={25} color="#FC345C" style={{ right: 25, opacity: 0.5, bottom: 30 }} />
              <TextInput style={{
                marginLeft: 10,
                marginRight: 10,
                bottom: 27,
                left: 30,
                position: 'absolute'
              }}
                placeholder="Enter Service Request No "
                onChangeText={text => setService(text)}
                value={service}
              />
            </View>

            <View style={{ top: 20 }}>
              <FontAwesome5 name="phone-volume" size={25} color="#FC345C" style={{ right: 25, opacity: 0.5, bottom: 30 }} />
              <TextInput style={{
                marginLeft: 10,
                marginRight: 10,
                bottom: 27,
                left: 30,
                position: 'absolute'
              }}
                placeholder="Enter your Number  "
                onChangeText={text => setNUmber(text)}
                value={number}
                keyboardType='numeric'
              />
            </View>

            <View style={{ top: 50 }}>
              <FontAwesome5 name="file-word" size={25} color="#FC345C" style={{ right: 25, opacity: 0.5, bottom: 30 }} />
              <TextInput style={{
                marginLeft: 10,
                marginRight: 10,
                bottom: 27,
                left: 30,
                position: 'absolute'
              }}
                placeholder="Enter Keyword  "
                onChangeText={text => setKeyword(text)}
                value={keyword}
              />
            </View>

            <View style={{ bottom: 10 }}>
              <FontAwesome5 name="thermometer-empty" size={24} color="#FC345C" style={{ right: 25, top: 65, opacity: 0.5, }} />
              <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={pendingcomp}
                data={Local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Pending comp"
                searchPlaceholder="Search..."
                onChange={e => {
                  setPendingComp(e.value);
                }}
              />
            </View>



          </View>


          <View style={{
            borderBottomWidth: 1, bottom: 35,
            backgroundColor: "#FC345C",
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 50,
            },
            shadowOpacity: 0.9,
            shadowRadius: 19.00,
            elevation: 20,
          }}>
          </View>

          <TouchableOpacity style={{
            padding: 5,
            bottom: 150,
            borderRadius: 5,
            backgroundColor: "#FC345C",
            shadowColor: "#FC345C",
            shadowOffset: {
              width: 0,
              height: 50,
            },
            shadowOpacity: 0.8,
            shadowRadius: 16.00,
            elevation: 24,
            top: 10
          }}
            onPress={() => navigation.navigate('SearchList')}
          >
            <Text style={{
              alignSelf: "center", color: 'white', fontWeight: '700'
            }}>Search Me...</Text>
          </TouchableOpacity>


        </View>
      </View>
    </ScrollView>
  );
};

export default Search

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 30,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    top: 15,
    left: 50
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  }, container: {
    paddingVertical: '7%',
    paddingHorizontal: '40%',
    height: '100%',
    backgroundColor: 'white',

  }, item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    backgroundColor: '#e5e5e5',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },


});
