import { useState, useEffect } from 'react';
import Article from '../api/article';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setErr] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await Article.get('/search/list', {
                params: {
                    s: searchTerm
                }
            });
            setResults(response.data.data);
        } catch (err) {
            setErr('Somthing went wrong');
        }
    };

    useEffect(() => {
        searchAPI('pertanian');
    }, []);

    return [searchAPI, results, error];
};