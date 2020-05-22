import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'
import ResultsDetail from '../components/ResultsDetail';

const ResultList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.artcId}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('Detail', {id: item.artcId})}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    container:{
        marginBottom: 15
    }
});

export default withNavigation(ResultList);