import { Data } from 'plotly.js';
import Plot from 'react-plotly.js';

interface Props {
  data: Data[]
}

export function Chart({ data }: Props) {

  return (
    <Plot
      data={data}
      layout={{ autosize: true, title: 'A Fancy Plot' }}
    />
  )
}

