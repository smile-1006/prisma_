import axios from 'axios';
import useSWR from 'swr';

import fetcher from '@/libs/fetcher';
// useGetFaculty hook it will fetch data from faculty 
export const useGetFaculty = () =>{
    // to get the letest information on the fornt page 
    const {data, isLoading, error} = useSWR('/api/faculty', fetcher,
    {
        revalidateOnFocus: false,
    });
    return {data, isLoading, error};

}