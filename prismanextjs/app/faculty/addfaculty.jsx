import { useAddFaculty } from '@/hooks/useaddfaculty';
import { useRouter } from 'next/router';
import React from 'react'
import {useState} from "react"

const addfaculty= () => {

  const addfaculty = useAddFaculty('api/faculty');

  const router = useRouter();

  const [faculty_id, setfaculty_id] = useState("");
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [designation, setdesignation] = useState("");
  const [date_of_joining, setdate_of_joining] = useState("");
  const [aicte_id, setaicte_id] = useState("");
  const [state, setstate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const faculty = {
      faculty_id,
      name,
      gender,
      designation,
      date_of_joining,
      aicte_id,
      state
    };
    await addfaculty(faculty)
    router.push('/faculty')
    console.log('submitting form')
  } 


  return (
    <>
      <div>
      <form className="max-w-md mx-auto my-8 p-8 border rounded shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="faculty_id" className="block text-sm font-medium text-gray-600">
          Faculty ID
        </label>
        <input onChange={(e)=> setfaculty_id(e.target.value)} type="text" id="faculty_id" name="faculty_id" className="mt-1 p-2 w-full border rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Name
        </label>
        <input onChange={(e)=> setname(e.target.value)} type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
          Gender
        </label>
        <select id="gender" name="gender" className="mt-1 p-2 w-full border rounded">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <input onChange={(e)=> setgender(e.target.value)} type="text" />
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="designation" className="block text-sm font-medium text-gray-600">
        designation
        </label>
        <input onChange={(e)=> setdesignation(e.target.value)} type="text" id="designation" name="designation" className="mt-1 p-2 w-full border rounded" />

      </div>

      <div className="mb-4">
        <label htmlFor="date_of_joining" className="block text-sm font-medium text-gray-600">
        date_of_joining
        </label>
        <input onChange={(e)=> setdate_of_joining(e.target.value)} type="text" id="date_of_joining" name="date_of_joining" className="mt-1 p-2 w-full border rounded" />

      </div>

      <div className="mb-4">
        <label htmlFor="aicte_id" className="block text-sm font-medium text-gray-600">
        aicte_id
        </label>
        <input onChange={(e)=> setaicte_id(e.target.value)} type="text" id="aicte_id" name="aicte_id" className="mt-1 p-2 w-full border rounded" />

      </div>

      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-600">
        state
        </label>
        <input onChange={(e)=> setstate(e.target.value)} type="text" id="state" name="state" className="mt-1 p-2 w-full border rounded" />

      </div>

      
      <div className="mt-6">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </div>
    </form>
      </div>
    </>
  )
}

export default addfaculty
