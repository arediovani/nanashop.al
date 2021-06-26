import React from 'react'
import data from '../data.json'
import Select from 'react-select'
export default function Filters({ categories }) {
  return (
    <div className="container prose lg:prose-xl px-5 py-j mx-auto">
      <h3>Numri total i produkteve: {data.length}</h3>
      <h4>Filtroni produktet sipas preferencave:</h4>
        <Select
        placeholder="Lloji i veshjes"
          isMulti
          name="categories"
          options={categories}
          className="basic-multi-select"
          classNamePrefix="select"
        />
    </div>
  )
}
