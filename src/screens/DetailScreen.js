import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Article from '../api/article';

const DetailScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [results, setResults] = useState(null);
   
    const detailAPI = async (id) => {
        try {
            const response = await Article.get('/news/detail', {
                params: {
                    id: id
                }
            });
            setResults(response.data.data);
        } catch (err) {
            setErr('Somthing went wrong');
        }
    };

    useEffect(() => {
        detailAPI(id);
    }, []);

    if (!results) {
        return null;
    }

    return (
        <View>
            <Text>{results.artcTitle}</Text>
            <Image style={style.image} source={{ uri: results.image.img4 }} />
        </View>
    );
};

const style = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default DetailScreen;