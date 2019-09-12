import React from 'react'

const CheckBox = () => {
  return (
    <div className="checkboxS">
      <div>
        <input id="75" type="checkbox" checked />
        <label className="checkboxLabel" for="75">75 cL</label>
      </div>
      <div>
        <input id="1.5" type="checkbox" checked />
        <label className="checkboxLabel" for="1.5">1.5 L</label>
      </div>
      <div>
        <input id="3" type="checkbox" checked />
        <label className="checkboxLabel" for="3">3 L</label>
      </div>

    </div>
  )
}
export default CheckBox