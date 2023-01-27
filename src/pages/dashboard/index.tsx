import { useDataContext } from "../../hooks/useDataContext";
import { Content } from "./content";
import { NavBar } from "./nav";

import { Sidebar } from "./sidebar";
import { ContentWrapper } from "./style";

interface Props {
  header: string;
  index?: number
}

export function DashboardPage({ header, index }: Props) {

  const { data } = useDataContext()

  return (
    <>
      <Sidebar></Sidebar>
      <ContentWrapper>
        <NavBar></NavBar>
        <Content
          header={header}
          data={data!.graficos[index!].components}
        ></Content>
      </ContentWrapper>
    </>
  )
}