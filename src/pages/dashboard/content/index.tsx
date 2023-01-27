
import { Data } from 'plotly.js';
import { Components, GraphObj } from '../../../context/data';
import { Chart } from '../chart';

import { DashboardContent, Description, Header, Text } from './style'

interface Props {
  header: string;
  data?: Components[]
}

export function Content({ header, data }: Props) {



  return (
    <DashboardContent>
      <>
        <Header>
          {header}
        </Header>
        {data?.map((i) => {
          switch (i.type) {
            case 'text':
              return <Text>{i.content as string}</Text>

            case 'graph':
              return <Chart
                data={i.content as Data[]}></Chart>

            case 'description':
              return <Description>{i.content as string}</Description>

          }
        }




        )}


      </>
    </DashboardContent>
  )
}