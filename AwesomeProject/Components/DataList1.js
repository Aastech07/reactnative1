import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Text, Platform, UIManager, TouchableOpacity } from 'react-native';
import { AccordionList } from 'react-native-accordion-list-view';


const DataList1 = () => {
    const data = [
        {
            id: "0",
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 1,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 2,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 3,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 4,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 5,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 6,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 7,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 8,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 9,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
        {
            id: 10,
            title: "SR NO: 29320 (24-JUN-2019)",
            body: "STP WATER QUALITY EXTREMELY POOR..and is dirty and dangerous to health",
            mydata1: "Nagesh pai 1105 Cardinal, Hiranadani Estate, ghod Bunder Road,Thane 400607"
        },
    ];
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AccordionList
                    data={data}
                    customTitle={item => <><Text style={{ fontSize: 15, fontWeight: '500', bottom: 25, position: 'absolute' }}>{item.title}</Text>
                        <Text style={{ top: 12, flex: 1, }}>
                            {item.body}</Text></>}
                    customBody={item => <>
                        <Text style={{ borderBottomWidth: 1, padding: 10, fontSize: 15, right: 10 }}>{item.mydata1}</Text>

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
                        }}>
                            <Text style={{
                                alignSelf: "center", color: 'white', fontWeight: '700'
                            }}>Open</Text>
                        </TouchableOpacity>


                    </>}

                    animationDuration={200}
                    expandMultiple={false}

                    style={{
                        marginBottom: 85,
                        top: 5
                    }}
                    containerItemStyle={{


                        backgroundColor: '#fff',
                        shadowColor: "black",
                        shadowOffset: {
                            width: 0,
                            height: 50,
                        },
                        shadowOpacity: 0.8,
                        shadowRadius: 16.00,
                        elevation: 24,
                        padding: 15
                        ,
                        top: 8
                    }}

                />
            </View>
        </SafeAreaView>
    );
};

export default DataList1;
const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        height: '100%',
        backgroundColor: 'white',

    },
});
