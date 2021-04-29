import React, { useCallback, useEffect, useState } from "react";
// Hook Query Params
import useQuery from "../hooks/useQuery";
// Http Client
import axios from 'axios';
// Environment
import environment from '../constants/environment'
// Model
import Item from "../models/Item";
// List
import ListItem from "../components/items/ListItem";
import Categories from "../components/items/Categories";

// Index View
const IndexView = () => {
    // Query Params
    const queryParams = useQuery();
    // Items
    const [items, setItems] = useState<Array<Item>>(new Array<Item>())
    // Categories
    const [categories] = useState<Array<string>>(['Lorem Impsum','Lorem Impsum','Lorem Impsum','Lorem Impsum'])
    // Search
    const [search, setSearch] = useState<string>();
    // Loading
    const [loading, setLoading] = useState(false);
    // Fetch Search
    const fetchSearch = useCallback(async () => {
        const search = queryParams.get('search') ? queryParams.get('search') : null;
        if (search) {
            setSearch(search);
        }

    }, [queryParams])
    // Fetch Data
    const fectchData = useCallback(async () => {
        try {
            setLoading(true)
            if (search && search !== '') {
                const response = await axios.get(`${environment.apiUrl}/items?q=${search}`)
                if (response.data) {
                    if (response.data.items) {
                        const items = response.data.items as Array<Item>;
                        setItems(items);
                    } else {
                        setItems(new Array<Item>());
                    }
                }
            }
        } catch (e) {

        } finally {
            setLoading(false)
        }
    }, [search])
    // Change Search
    useEffect(() => {
        fectchData();
    }, [search, fectchData]);
    // Change query params
    useEffect(() => {
        fetchSearch()
    }, [fetchSearch, queryParams]);
    // Render
    return (
        <>
            {loading && <h2 className="text-center my-5">Cargando...</h2>}
            {!loading && search && items.length > 0 &&
                <>
                    <Categories categories={categories} />
                    <div className="bg-white">
                        <ListItem items={items} />
                    </div>
                </>
            }
            {!loading && search && items.length === 0 &&
                <>

                    <div className="bg-white p-5 mt-4">
                        <h2 className="text-center py-5">{`Sin resultados para su búsqueda :(`}</h2>
                    </div>
                </>
            }
        </>
    );
};

export default IndexView;