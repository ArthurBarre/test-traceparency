import React from 'react'

const CheckBox = () => {
  return (
    <div className="checkboxS">
      <div>
        <input id="75" type="checkbox" checked />
        <label className="checkboxLabel" htmlFor="75">75 cL</label>
      </div>
      <div>
        <input id="1.5" type="checkbox" />
        <label className="checkboxLabel" htmlFor="1.5">1.5 L</label>
      </div>
      <div>
        <input id="3" type="checkbox" />
        <label className="checkboxLabel" htmlFor="3">3 L</label>
      </div>

    </div>
  )
}
export default CheckBox