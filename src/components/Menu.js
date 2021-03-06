import React from 'react'
import SelectBox from "../subComponents/SelectBox";
import '../styles/style.css'
const Menu = () => {
  return (
    <div className="menu">
      <SelectBox
        items={[
          { value: 'Liste', id: 1 },
          { value: 'Mes modeles de certificats', id: 2 },
          { value: 'Creer des certificats', id: 3 }
        ]}
        title="ANALYTICS"
      />
      <SelectBox
        items={[
          { value: 'Liste', id: 1 },
          { value: 'Mes modeles de certificats', id: 2 },
          { value: 'Creer des certificats', id: 3 }
        ]}
        title="MES CERTIFICATS"
      /><SelectBox
        items={[
          { value: 'Liste', id: 1 },
          { value: 'Mes modeles de certificats', id: 2 },
          { value: 'Creer des certificats', id: 3 }
        ]}
        title="PARAMETRES"
      />
    </div>
  )
}
export default Menu;