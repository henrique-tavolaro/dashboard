
import { Side, List, Logo, Item } from './style'

import { useNavigate } from 'react-router-dom'
import { useDataContext } from '../../../hooks/useDataContext';
import { useEffect } from "react";



export function Sidebar() {



  const { data } = useDataContext();
  let navigate = useNavigate()

  useEffect(() => {
    console.log('SIDEBAR', data);
    
  })

  return (
    <Side>
      <Logo>
        MeteoIA
      </Logo>
      <List>

        {data?.graficos?.map((e, index) => (

          <Item
            key={index}
            onClick={() => navigate(`/${data?.companyName}/${e.graphName}`)}
          >{e.graphName}</Item>
        )

        )}

      </List>
    </Side>
  )
}