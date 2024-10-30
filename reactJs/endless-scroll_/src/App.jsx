import Layout from "./components/Layout"
import { UserProvider } from "./context/UserContext"

export const App = () => {
  return (
    <UserProvider>
      <Layout/>
    </UserProvider>
  )
}
