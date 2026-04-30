import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

const App = () => {
  const[category,setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("dark");
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }

    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!themeLoaded) {
      return;
    }

    document.body.className = theme;
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme, themeLoaded]);

  return (
    <div className="app-shell">
      <Navbar
        category={category}
        setCategory={setCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        setTheme={setTheme}
      />
      <NewsBoard category={category} searchQuery={searchQuery}/>
      <Footer category={category} setCategory={setCategory}/>
    </div>
  )
}

export default App
