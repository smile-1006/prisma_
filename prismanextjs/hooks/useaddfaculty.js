import axios from 'axios';
import useSWR from 'swr';

// useAddFaculty hook it will fetch data from faculty api

export const useAddFaculty = (path) =>{
    // to get the letest information on the fornt page 
    const {mutate} = useSWR(path);

    const addfaculty = async (data) =>{
        const res = await axios.post(path,{data});

        if (!res.ok){
            throw new Error('Something went wrong while adding the faculty');
        }
        mutate();
    }

    return addfaculty;

}