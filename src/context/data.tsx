import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { Data } from 'plotly.js';
import useAuth from "../hooks/useAuth";
import dataFetch from "../services/fetch-data";

export interface GraphObj {
  graphName: string;
  components: Components[];
}

export interface Components {

  type: string;
  content: Data[] | string

}

export interface GraphData {
  companyName: string;
  graficos: GraphObj[]
}


export interface IDataContext {
  data: GraphData | undefined;
  setData: React.Dispatch<React.SetStateAction<GraphData | undefined>>
}

export const DataContext = createContext({} as IDataContext)

export default function DataProvider({ children }: any) {
  const [data, setData] = useState<GraphData>()
  const { user } = useAuth()

  useEffect(() => {
    
    if(user){
      
      fetchData(user.company!)
    }

  }, [user])

  const fetchData = async (company: string) => {
    const result = await dataFetch(company)
    setData(result)

  }

  return (
    <DataContext.Provider
      value={{ data, setData }}
    >
      {children}
    </DataContext.Provider>
  )
}

