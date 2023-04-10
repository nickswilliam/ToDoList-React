import DeleteAllItems from "./Components/DeleteAllItems/DeleteAllItems"
import ToDo from "./Components/ToDo/ToDo"
import { FlagContextProvider } from "./Context/WindowDeleteFlagContext"
import { GlobalStyles } from "./Styles/GlobalStyles"

function App() {

  return (
    <>
      <FlagContextProvider>
      <ToDo />
      </FlagContextProvider>
      <GlobalStyles />
    </>
  )
}

export default App
