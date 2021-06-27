import React from 'react'
import data from '../data.json'
import Select from 'react-select'

export default function Filters({ categories, filterChange }) {
  return (
    <div className="container prose lg:prose-xl px-5 py-j mx-auto">
      <h3>Numri total i veshjeve: {data.length}</h3>
      <h4>Filtroni produktet sipas preferencave:</h4>
      <Select
        placeholder="Lloji i veshjes"
        name="categories"
        options={categories}
        className="basic-multi-select"
        onChange={filterChange}
      />
    </div>
  )
}
