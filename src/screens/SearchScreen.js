import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, error] = useResults();

    const filterResultsByKanal = (kanal) => {
        return results.filter(result => {
            return result.msctName === kanal;
        });
    }

    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onTermSubmit={() => searchAPI(term)}
                onTermChange={setTerm}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultList results={filterResultsByKanal('News')} title="News" />
                <ResultList results={filterResultsByKanal('Pertanian')} title="Pertanian" />
                <ResultList results={filterResultsByKanal('Pangan')} title="Pangan" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});

export default SearchScreen;