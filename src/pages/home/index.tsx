import { useEffect } from "react";
import { IUser } from "../../context/auth";
import { useDataContext } from "../../hooks/useDataContext";
import { DashboardContent, Text } from "../dashboard/content/style";
import { NavBar } from "../dashboard/nav";
import { Sidebar } from "../dashboard/sidebar";

interface Props {
  companyName: string;
  user: IUser;
}

export function HomePage({ companyName, user }: Props) {

  const { data } = useDataContext();

  useEffect(() => {
    console.log('user: ', data);

  })


  return (

    <>
      <Sidebar></Sidebar>
      <NavBar></NavBar>
      <DashboardContent>
        <Text>Home {companyName} {user.name}</Text>
      </DashboardContent>
    </>
  )
}