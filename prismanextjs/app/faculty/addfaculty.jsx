import React from 'react'
import {useState} from "react"

function addfaculty() {

  const [faculty_id, setfaculty_id] = useState("");
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [designation, setdesignation] = useState("");
  const [date_of_joining, setdate_of_joining] = useState("");
  const [aicte_id, setaicte_id] = useState("");
  const [state, setstate] = useState("");
  return (
    <>
      <div>
      <form className="max-w-md mx-auto my-8 p-8 border rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="faculty_id" className="block text-sm font-medium text-gray-600">
          Faculty ID
        </label>
        <input type="text" id="faculty_id" name="faculty_id" className="mt-1 p-2 w-full border rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Name
        </label>
        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded" />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
          Gender
        </label>
        <select id="gender" name="gender" className="mt-1 p-2 w-full border rounded">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="designation" className="block text-sm font-medium text-gray-600">
        designation
        </label>
        <select id="designation" name="designation" className="mt-1 p-2 w-full border rounded">
          
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date_of_joining" className="block text-sm font-medium text-gray-600">
        date_of_joining
        </label>
        <select id="date_of_joining" name="date_of_joining" className="mt-1 p-2 w-full border rounded">
          
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="aicte_id" className="block text-sm font-medium text-gray-600">
        aicte_id
        </label>
        <select id="aicte_id" name="aicte_id" className="mt-1 p-2 w-full border rounded">
          
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-600">
        state
        </label>
        <select id="state" name="state" className="mt-1 p-2 w-full border rounded">
          
        </select>
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
