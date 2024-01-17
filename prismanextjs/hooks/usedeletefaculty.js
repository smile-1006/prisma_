
import useSWR from 'swr';

// useAddFaculty hook it will fetch data from faculty api

export const usedeleteFaculty = (path) =>{
    // to get the letest information on the fornt page 
    const {mutate} = useSWR(path);

    const deletefaculty = async (faculty_id) =>{
        const res = await fetch(`${path}?id=${faculty_id}`,{
            method: 'DELETE',
            
        });

        if (!res.ok){
            throw new Error('Something went wrong while adding the faculty');
        }
        mutate();
    }

    return deletefaculty;

}