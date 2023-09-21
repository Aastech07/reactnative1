import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList, Pressable, Button } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { themeColors } from './Theme/ThemeColor';
import { ScrollView } from 'react-native-virtualized-view';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
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
  }, {
    id: "1",
    SR_No: "78652",
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

const Building_DATA = [
  {
    value: '0',
    lable: 'Select Building',
  }, {
    value: '1',
    lable: 'abcd',
  }, {
    value: '2',
    lable: 'Club House',
  }, {
    value: '3',
    lable: 'Crysta',
  }, {
    value: '4',
    lable: 'infra Gates',
  }, {
    value: '5',
    lable: 'Lotus',
  },

]
const Status_Data = [
  {
    value: '0',
    lable: 'Pending complaints',
  }, {
    value: '1',
    lable: 'New',
  }, {
    value: '2',
    lable: 'Opened',
  }, {
    value: '3',
    lable: 'Closed',
  },
]

const Search = ({ navigation }) => {
  const [project, setProject] = useState('');
  const [flat, setFlatNo] = useState("");
  const [building, setBuilding] = useState("");
  const [number, setNUmber] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pendingcomp, setPendingComp] = useState("");
  const [searchText, setSearchText] = useState('');
  const [dataArray, setDataArray] = useState(Local_data); 
  const [filteredData, setFilteredData] = useState([]);
  const [showData, setShowData] = useState(false);

  const handleSearch = () => {
    const newFilteredData = () => {
      return dataArray
        .filter(item => item && item.SR_No)
        .filter(item => item.SR_No.toLowerCase().includes(searchText.toLowerCase()));
    }
    setFilteredData(newFilteredData);
    setShowData(true);
  };
  const offset = useSharedValue(100);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }],
    }));

    React.useEffect(() => {
        offset.value = withRepeat(
            withTiming(-offset.value, { duration: 4000 }),
            +1,
            true
        );
    }, []);
  return (
    <ScrollView style={{}}>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <View style={{}}>
          <View style={{ bottom: 50 }}>
            <Text style={{ fontWeight: '500', fontSize: 17, right: 5, top: 75 }}>Project:-</Text>
            <View style={{ bottom: 10, left: 10 }}>
              <FontAwesome5 name="project-diagram" size={20} color={themeColors.bg} style={{ right: 55, top: 65 }} />
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
                }} />
            </View>

            <View style={{ bottom: 65, }}>
              <Text style={{ fontWeight: '500', top: 85, fontSize: 17, right: 10 }}>Building:-</Text>
              <FontAwesome5 name="building" size={24} color={themeColors.bg} style={{ right: 45, top: 65, }} />
              <View style={{ left: 10 }}>
                <SelectCountry
                  style={styles.dropdown}
                  selectedTextStyle={styles.selectedTextStyle}
                  placeholderStyle={styles.placeholderStyle}
                  imageStyle={styles.imageStyle}
                  iconStyle={styles.iconStyle}
                  maxHeight={200}
                  value={building}
                  data={Building_DATA}
                  valueField="value"
                  labelField="lable"
                  imageField="image"
                  placeholder="Select Building"
                  searchPlaceholder="Search..."
                  onChange={e => {
                    setBuilding(e.value);
                  }} />
              </View>
            </View>


            <View style={{ bottom: 120 }}>
              <Text style={{ fontWeight: '500', top: 85, fontSize: 17, right: 5 }}>Flat NO:-</Text>
              <FontAwesome5 name="sort-numeric-up-alt" size={24} color={themeColors.bg} style={{ right: 43, top: 55 }} />
              <View style={{ left: 10 }}>
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
                  }} />
              </View>
            </View>
          </View>

          <View style={{ bottom: 110 }}>
            <View style={{ bottom: 35 }}>
              <Text style={{ fontWeight: '500', fontSize: 17, right: 5, bottom: 7 }}>SR_No:-</Text>
              <FontAwesome5 name="poll" size={25} color={themeColors.bg} style={{ right: 43, bottom: 30 }} />
              <TextInput style={{
                marginLeft: 20,
                marginRight: 70,
                bottom: 30,
                left: 70,
                position: 'absolute',
                borderBottomWidth: 1
              }}
                placeholder="Enter Service Request  "
                onChangeText={text => setSearchText(text)}
                value={searchText} />
            </View>

            <View style={{ bottom: 25 }}>
              <Text style={{ fontWeight: '500', fontSize: 17, right: 8, bottom: 7 }}>Mobile_No:-</Text>
              <FontAwesome5 name="phone-volume" size={25} color={themeColors.bg} style={{ right: 40, bottom: 30 }} />
              <TextInput style={{
                borderBottomWidth: 1,
                alignSelf: 'center',
                padding: 4,
                position: 'absolute',
                bottom: 35, left: 90,
                marginRight: 100
              }}
                placeholder="Enter your Number  "
                onChangeText={text => setNUmber(text)}
                value={number}
                keyboardType='numeric'

              />
            </View>

            <View style={{ bottom: 20 }}>
              <Text style={{ fontWeight: '500', fontSize: 17, bottom: 7 }}>Keyword:-</Text>
              <FontAwesome5 name="file-word" size={25} color={themeColors.bg} style={{ right: 40, bottom: 30 }} />
              <TextInput style={{
                borderBottomWidth: 1,
                alignSelf: 'center',
                padding: 4,
                position: 'absolute',
                bottom: 35, left: 90,
                marginRight: 100
              }}
                placeholder="Enter the Keyword  "
                onChangeText={text => setKeyword(text)}
                value={keyword} />
            </View>

            <View style={{ bottom: 20 }}>
              <Text style={{ fontWeight: '500', fontSize: 17, }}>Status:-</Text>
              <FontAwesome5 name="database" size={24} color={themeColors.bg} style={{ right: 42, bottom: 25 }} />
              <View style={{ bottom: 85, left: 10 }}>
                <SelectCountry
                  style={styles.dropdown}
                  selectedTextStyle={styles.selectedTextStyle}
                  placeholderStyle={styles.placeholderStyle}
                  imageStyle={styles.imageStyle}
                  iconStyle={styles.iconStyle}
                  maxHeight={200}
                  value={pendingcomp}
                  data={Status_Data}
                  valueField="value"
                  labelField="lable"
                  imageField="image"
                  placeholder="Pending comp"
                  searchPlaceholder="Search..."
                  onChange={e => {
                    setPendingComp(e.value);
                  }} />
              </View>
            </View>
          </View>

          <TouchableOpacity style={{
            padding: 5,
            bottom: 190,
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
            paddingLeft: 50,
            paddingRight: 50,
          }}
            onPress={handleSearch}
          >
            <Text style={{
              alignSelf: "center", color: 'white', fontWeight: '700'
            }}>Search Me...</Text>
          </TouchableOpacity>

          <View style={{
            borderBottomWidth: 1, bottom: 160,
            backgroundColor: "#FC345C",
            shadowColor: "black",
            shadowOffset: {
              width: 0,
              height: 50,
            },
            shadowOpacity: 0.9,
            shadowRadius: 19.00,
            elevation: 20,
            paddingLeft: 180,
            paddingRight: 180,
            position: 'absolute',
            alignSelf: 'center'
          }}>
          </View>

        </View>
      </View>

      <Animated.View style={animatedStyles}>

        {showData ?
          filteredData.length === 0 ? (
            <Text>is Empty</Text>
          ) :
            (
              <FlatList
                style={{ height: responsiveHeight(250), top: 10, bottom: 50, marginBottom: 100 }}
                data={filteredData}
                keyExtractor={item => item.id.toString()}
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
                        

                      }}
                        onPress={() => navigation.navigate('ViewCom')}>
                        <Text style={{
                          alignSelf: "center", color: 'white', fontWeight: '700'
                        }}>View complaint</Text>
                      </TouchableOpacity>

                    </View>
                  </Pressable>)} />
            ) : null}
      </Animated.View>
    </ScrollView>

  );
};

export default Search

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 40,
    width: responsiveWidth(55),
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    top: 15,
    left: 50,

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
    borderRadius: 10,
    margin: 5,
    marginHorizontal: 10,
    bottom: 20
  },
  container1: {
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


  }

});
