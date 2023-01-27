
import { useDataContext } from "../../../hooks/useDataContext";
import { CompanyName, Nav, UserInfoWrapper } from "./style";
import { AiOutlineUser } from 'react-icons/ai'
import { Text } from "../content/style";
import useAuth from "../../../hooks/useAuth";

export function NavBar() {

  const { data } = useDataContext()
  const { setUser, user } = useAuth()

  return (
    <>
      <Nav>
        <CompanyName>{data?.companyName}</CompanyName>
        <UserInfoWrapper
          onClick={() => {
            setUser(undefined)
          }}
        >

          <AiOutlineUser
            fontSize={24}
          />
          <Text>{user?.name}</Text>
        </UserInfoWrapper>
      </Nav>
    </>
  )
}