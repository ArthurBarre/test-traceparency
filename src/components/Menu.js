import React from 'react'
import SelectBox from "../subComponents/MenuDropdown";
import '../styles/style.css'
const Menu = () => {
  return (
    <div className="menu">
      <SelectBox
        items={[
          { value: 'United States', id: 1 },
          { value: 'France', id: 2 },
          { value: 'Canada', id: 3 }
        ]}
        title="le titre"
      />
      <SelectBox
        items={[
          { value: 'United States', id: 1 },
          { value: 'France', id: 2 },
          { value: 'Canada', id: 3 }
        ]}
        title="le titre 2"
      /><SelectBox
        items={[
          { value: 'United States', id: 1 },
          { value: 'France', id: 2 },
          { value: 'Canada', id: 3 }
        ]}
        title="le titre 3"
      />
    </div>
  )
}
export default Menu;