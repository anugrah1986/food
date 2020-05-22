import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} 
            source={{ uri: result.image.img3 }} />
            <Text style={styles.nameStyle}>{result.artcTitle}</Text>
            <Text>{result.showTime}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle:{
        fontWeight: 'bold',
        fontSize: 14,
        width: 250
    }
});

export default ResultsDetail;