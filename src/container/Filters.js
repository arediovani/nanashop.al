import React from 'react'
import data from '../data.json'
import Select from 'react-select'

export default function Filters({ categories, filterChange }) {
  return (
    <div className="container  prose lg:prose-xl px-5  mx-5">

      <h3>Numri total i veshjeve: {data.length}</h3>
      <label class="block">
        <span class="text-gray-700">Selekto llojin e veshjes:</span>
        <Select
          isSearchable={false}
          placeholder="Lloji i veshjes"
          options={categories}
          className="form-select block w-full mt-1"
          onChange={filterChange}
        />
      </label>
      <label class="block">
        <span class="text-gray-700">Rendit sipas:</span>
        <Select
          isSearchable={false}
          placeholder="Renditja"
          options={"rrites", "zbritës"}
          className="form-select block w-full mt-1"
          onChange={filterChange}
        />
      </label>
    </div>
  )
}
