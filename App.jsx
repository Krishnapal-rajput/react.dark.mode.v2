import { useEffect, useState } from "react"

export default function App() {

    const [darkTheme, setDarkTheme] = useState(()=>{
        return localStorage.getItem("darkTheme") === "dark"
    })

    useEffect(()=>{
        if(darkTheme){
            document.body.classList.add("dark")
            localStorage.setItem("darkTheme", "dark")
        } else{
            document.body.classList.remove("dark")
            localStorage.setItem("darkTheme", "light")
        }
    })

    const changeTheme = () => {
        setDarkTheme(prev=>!prev)
    }

  return (
    <div onClick={changeTheme} className="btn"><i className={darkTheme ? "fas fa-sun" : "fas fa-moon"}></i></div>
  )
}
