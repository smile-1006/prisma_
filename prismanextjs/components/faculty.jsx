import React from 'react'
import { useDeleteFaculty } from '@/hooks/usegetfaculty'

const faculty = () => {
    const deleteFaculty = useDeleteFaculty('api/faculty');

    const handleDelete = (faculty_id) => async () => {
        await deleteFaculty(faculty_id)
    }

    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg items-center">
                <img class="h-[400px]" src={faculty?.image} alt="card image"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{faculty?.name}</div>
                    <p class="text-gray-100 text-base">
                        {faculty?.designation}
                    </p>
                    <p class="text-gray-200 text-base">
                        {faculty?.date_of_joining}
                    </p>
                    <p class="text-gray-200 text-base">
                        {faculty?.state}
                    </p>


            </div>

            <div class="px-6 pt-4 pb-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleDelete(faculty?.faculty_id)}> Delete </button>
                </div>
        </div>
        </div>
    )
}

export default faculty
