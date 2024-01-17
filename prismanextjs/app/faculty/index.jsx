import { useGetFaculty } from '@/hooks/usegetfaculty'
import React from 'react'

function faculty() {
  const {data: faculty,isloading, error} = useGetFaculty
  return (
    <>
      <h1 className='text-4xl mt-3 p-4 text-center font-serif'>Add Faculty</h1>
      <hr/>

      <div className='container mx-auto mt-5 py-4'>
        <div className='grid grid-cols-1 1g:grid-cols-3 md:grid-cols-2 item-center mt-3 py-3'>
          {
            faculty?.map((faculty)=>{
              return <faculty key={faculty.id} faculty={faculty}/>
            })
          }
        </div>

      </div>

    </>
  )
}

export default faculty
