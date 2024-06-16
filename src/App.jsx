import QuoteRequestForm from "./components/quotes"
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuoteRequestForm/>}/>
      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
