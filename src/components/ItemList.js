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

const DELETE_QUERY = gql `{
    mutation DeleteItem($id)
}` 