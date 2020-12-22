import React from 'react';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';

const ITEMS_QUERY = gql `{
    allItems{
        data{
            _id
            name
        }
    }
}
`;

const DELETE_QUERY = gql `
    mutation DeleteItem($id: ID!){
        deleteItem(id: $id){
            _id
        }
    }
`;

export function ItemList(){
    const { data, loading } useQuery(ITEMS_QUERY);
    const [deleteItem, { loading: deleteLoading }] = useMutation(DELETE_QUERY, { 
    refetchQueries: [{ query: ITEMS_QUERY }],
});
if(loading){
    return <div>Loading...</div>
}
return(
    <ul>
        {data.allItems.data.map((item) => {
            return(
                <li key={item.id}>
                    {item.name}{""}
                    <button
                        disabled={deleteLoading}
                        onClick={ (e) => {
                            e.preventDefault();
                            deleteItem({ variables: {id: item._id} });
                        }}
                    >
                    Remove
                    </button>
                </li>
            );
        })}
    </ul>
)
}