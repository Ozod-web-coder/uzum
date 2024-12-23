import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, Dimensions, ScrollView, ImageBackground, Button} from 'react-native';

const data = [
    { id: '1', title: 'First Slide', image: 'https://i.pinimg.com/736x/df/af/f3/dfaff3c0f6908ab1e8788fb3811492c9.jpg' },
    { id: '2', title: 'Second Slide', image: 'https://i.pinimg.com/736x/c5/1e/d5/c51ed53972f630d7cce14296f3d758d2.jpg' },
    { id: '3', title: 'Third Slide', image: 'https://i.pinimg.com/736x/57/e8/b9/57e8b9137e07fb289f62e15065687877.jpg' },
    { id: '4', title: 'Third Slide', image: 'https://i.pinimg.com/736x/fb/d5/f3/fbd5f3edfbd3bf9c5c3c0224bb095e4e.jpg' },
];

export function Slider(){
    const { width } = Dimensions.get('window');
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    };

    return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
            >
                {data.map((item) => (
                    <View key={item.id} style={[styles.slide, { width }]}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.title}
                        </Text>
                        <View style={styles.btn}>
                            <Button color="#7b2dc5" title={'Learn More'}/>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
        marginTop:20,
        position:"relative"
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 8,
    },
    title: {
        marginTop: 100,
        marginRight:250,
        fontSize: 24,
        color: '#ffffff',
        position:"absolute"
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#333',
    },
    btn:{
        backgroundColor:'#7b2dc5',
        position:"absolute",
        marginTop: 140,
        marginRight:250,

    }
});

