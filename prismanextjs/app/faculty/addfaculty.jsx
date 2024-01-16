import React from 'react'

function addfaculty() {
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
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Repeat similar structure for other fields: designation, date_of_joining, aicte_id, state */}

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
