import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Article from '../api/article';

const DetailScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [results, setResults] = useState(null);
    console.log(results);

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

    return (
        <View>
            <Text>Detail Screen</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default DetailScreen;