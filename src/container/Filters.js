import React from 'react'
import data from '../data.json'
import Select from 'react-select'

export default function Filters({ categories, filterChange, orderChange}) {
  let ordering = 
    [
      { "value": "zbrites", "label": "zbrites" },
      { "value": "rrites", "label": "rrites" }
    ] 
 
  return (
    <div className="container  prose lg:prose-xl px-5  mx-5">
      <h3>Numri total i veshjeve: {data.length}</h3>
      <label>Filtroni produktet sipas preferencave:</label>
      <Select
        placeholder="Lloji i veshjes"
        name="categories"
        options={categories}
        className="basic-multi-select"
        onChange={filterChange}
      />
      <h4>Rendit sipas çmimit:</h4>
      <Select
        placeholder="Rënditja"
        name="çmimi"
        options={ordering}
        className="basic-multi-select"
        onChange={orderChange}
      />
    </div>
  )
}
