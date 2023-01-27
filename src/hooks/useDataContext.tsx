import { useContext } from "react"
import { DataContext } from "../context/data"

export function useDataContext() {
  const { data } = useContext(DataContext)

  return {
    data
  }
}