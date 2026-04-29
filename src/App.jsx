import { useState } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

const App = () => {
  const[category,setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app-shell">
      <Navbar
        category={category}
        setCategory={setCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <NewsBoard category={category} searchQuery={searchQuery}/>
      <Footer category={category} setCategory={setCategory}/>
    </div>
  )
}

export default App
