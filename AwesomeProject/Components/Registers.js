import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const local_data = [
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


const Registers = () => {
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('')
  const [selectedDate, setSelectedDate] = useState(hrs);
  const [datePickerVisible, setDatePickerVisible] = useState(false);


  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (hrs) => {
    setSelectedDate(hrs);
    hideDatePicker();
  };
  var myDate = new Date();
  var hrs = myDate.getHours();


  return (
    <ScrollView style={{}}>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          padding: 72, borderRadius: 15, opacity: 0.9,
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
          marginBottom: 20


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
                value={country}
                data={local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="OHP"
                searchPlaceholder="Search..."
                onChange={e => {
                  setCountry(e.value);

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
                value={country}
                data={local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Select Building"
                searchPlaceholder="Search..."
                onChange={e => {
                  setCountry(e.value);
                }}
              />

            </View>

            <View style={{ bottom: 80 }}>
              <FontAwesome5 name="door-open" size={24} color="#FC345C" style={{ right: 25, top: 65, opacity: 0.5, }} />
              <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={country}
                data={local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Select Wing"
                searchPlaceholder="Search..."
                onChange={e => {
                  setCountry(e.value);
                }}
              />
            </View>

            <View style={{ bottom: 110 }}>
              <FontAwesome5 name="sort-numeric-up-alt" size={24} color="#FC345C" style={{ right: 25, top: 65, opacity: 0.5, }} />
              <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={country}
                data={local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Flat No"
                searchPlaceholder="Search..."
                onChange={e => {
                  setCountry(e.value);
                }}
              />
            </View>
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

          }}>
            <Text style={{
              alignSelf: "center", color: 'white', fontWeight: '700'
            }}>Search Me...</Text>
          </TouchableOpacity>


          <View style={{ bottom: 170, }}>
            <FontAwesome5 name="users" size={24} color="#FC345C" style={{ right: 25, top: 61, opacity: 0.5, }} />
            <SelectCountry
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={styles.placeholderStyle}
              imageStyle={styles.imageStyle}
              iconStyle={styles.iconStyle}
              maxHeight={200}
              value={country}
              data={local_data}
              valueField="value"
              labelField="lable"
              imageField="image"
              placeholder="Select Member"
              searchPlaceholder="Search..."
              onChange={e => {
                setCountry(e.value);
              }}
            />
          </View>
          <View style={{
            borderBottomWidth: 1, bottom: 140,
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

          <View style={{ bottom: 20 }}>
            <Text style={{ bottom: 130, position: 'absolute', right: 120, fontWeight: '500' }}>
              COMPLAINANT INFORMATION:
            </Text>
            <View style={{ bottom: 10 }}>
              <FontAwesome5 name="signature" size={25} color="#FC345C" style={{ right: 25, opacity: 0.5, bottom: 30 }} />
              <TextInput style={{
                marginLeft: 10,
                marginRight: 10,
                bottom: 27,
                left: 30,
                position: 'absolute'
              }}
                placeholder="Enter your Name "
                onChangeText={text => setPassword(text)}
                value={password}
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
                onChangeText={text => setPassword(text)}
                value={password}
                keyboardType='numeric'
              />
            </View>

            <View style={{ top: 50 }}>
              <FontAwesome5 name="envelope" size={25} color="#FC345C" style={{ right: 25, opacity: 0.5, bottom: 30 }} />
              <TextInput style={{
                marginLeft: 10,
                marginRight: 10,
                bottom: 27,
                left: 30,
                position: 'absolute'
              }}
                placeholder="Enter your Email..  "
                onChangeText={text => setPassword(text)}
                value={password}

              />
            </View>

          </View>


          <View style={{
            borderBottomWidth: 1, top: 30,
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
        </View>

        <View style={{
          padding: 57, borderRadius: 15, opacity: 0.9,
          backgroundColor: '#Fff',
          shadowColor: "#FC345C",
          shadowOffset: {
            width: 0,
            height: 50,
          },
          shadowOpacity: 0.8,
          shadowRadius: 16.00,
          elevation: 24,
          marginTop: 90,

          bottom: 105

        }}>

          <View style={{}}>
            <Text style={{ bottom: 50, right: 40, fontWeight: '500' }}>
              CONTACT PERSON AT LOCATION:
            </Text>
            <View style={{ bottom: 10 }}>
              <FontAwesome5 name="signature" size={26} color="#FC345C" style={{ right: 25, opacity: 0.5, bottom: 30 }} />
              <TextInput style={{
                marginLeft: 10,
                marginRight: 10,
                bottom: 27,
                left: 30,
                position: 'absolute'
              }}
                placeholder="Enter your Name "
                onChangeText={text => setPassword(text)}
                value={password}
              />
            </View>

            <View style={{ top: 20 }}>
              <FontAwesome5 name="phone-volume" size={26} color="#FC345C" style={{ right: 25, opacity: 0.5, bottom: 30 }} />
              <TextInput style={{
                marginLeft: 10,
                marginRight: 10,
                bottom: 27,
                left: 30,
                position: 'absolute'
              }}
                placeholder="Contact No  "
                onChangeText={text => setPassword(text)}
                value={password}
                keyboardType='numeric'
              />
            </View>

            <View style={{ bottom: 40 }}>
              <FontAwesome5 name="building" size={26} color="#FC345C" style={{ right: 25, top: 65, opacity: 0.5, }} />
              <SelectCountry
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                placeholderStyle={styles.placeholderStyle}
                imageStyle={styles.imageStyle}
                iconStyle={styles.iconStyle}
                maxHeight={200}
                value={country}
                data={local_data}
                valueField="value"
                labelField="lable"
                imageField="image"
                placeholder="Select Depart"
                searchPlaceholder="Search..."
                onChange={e => {
                  setCountry(e.value);
                }}
              />
            </View>

            <View style={{ bottom: 60 }}>
              <FontAwesome5 name="clock" size={26} color="#FC345C" style={{ right: 30, top: 75, opacity: 0.5, }} />
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 20, top: 20, left: 35 }}>
                {selectedDate ? selectedDate.toLocaleString() : selectedDate}
              </Text>

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
                left:20
              }}
                onPress={showDatePicker}

              >
                <Text style={{
                  alignSelf: "center", color: 'white', fontWeight: '700'
                }}>Select Date&Time</Text>
              </TouchableOpacity>

              <DateTimePickerModal
                date={selectedDate}
                isVisible={datePickerVisible}
                mode="time"
                is24Hour
                locale="en_GB"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>



          </View>





        </View>



      </View>
    </ScrollView>
  );
};

export default Registers

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
  },


});
