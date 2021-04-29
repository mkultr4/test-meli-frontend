import React, { useCallback, useEffect, useState } from "react";
// Router
import { useParams } from "react-router";
// Http Client
import axios from 'axios';
// Environment
import environment from '../constants/environment'
// Model
import Item from "../models/Item";
// Details
import ItemDetails from "../components/items/ItemDetails";
// Categories
import Categories from "../components/items/Categories";

interface DetailViewParams {
    id: string;
}

// Index View
const DetailView = () => {
    // Item Id
    const { id } = useParams<DetailViewParams>();
    // Items
    const [item, setItem] = useState<Item>(new Item())
    // Categories
    const [categories] = useState<Array<string>>(['Lorem Impsum','Lorem Impsum','Lorem Impsum','Lorem Impsum'])
    // Loading
    const [loading, setLoading] = useState(true);
    // Fetch Data
    const fectchData = useCallback(async () => {
        try {
            if (id) {
                const response = await axios.get(`${environment.apiUrl}/items/${id}`)
                if (response.data) {
                    const item = response.data as Item;
                    setItem(item)
                } else {
                    setItem(new Item());
                }
            }

        } catch (e) {

        } finally {
            setLoading(false)
        }
    }, [id])
    // Change Search
    useEffect(() => {
        fectchData()
    }, [id, fectchData]);

    // Render
    return (
        <>
            {loading && <h2 className="text-center my-5">Cargando...</h2>}
            {!loading && item.id &&
                <>
                    <Categories categories={categories} />
                    <div className="bg-white p-10">
                        <ItemDetails item={item} />
                    </div>
                </>
            }
            {!loading && !item.id &&
                <div className="bg-white p-10 mt-4">
                    <h2 className="text-center py-5">{`El producto que quiere ver no existe :(`}</h2>
                </div>}
        </>
    );
};

export default DetailView;