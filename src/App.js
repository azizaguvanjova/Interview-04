import React, { useContext, useEffect, useState,createContext } from "react";
 const UserContext = createContext()
function App() {
  const [userState, setUserState] = useState({
    Namık: true,
    Eda: true,
    Suzan: true,
    Engin: true,
    Samet: true
  });

  // KODUNUZ BURAYA GELECEK
  useEffect(()=>{
    const interval = setInterval(() =>{
      const users = Object.keys(userState)
      const randomUser = users[Math.floor(Math.random() * users.length)];


      setUserState(prevState => ({
        ...prevState,[randomUser]:!prevState[randomUser]
      }))
    },2000)
    return () => clearInterval(interval)
  },[userState])


  return (
    <UserContext.Provider value={{userState,setUserState}}>
      <div className="flex justify-center items-center h-screen bg-cyan-200">
        <h1 className="border-solid border-black font-bold">Kullanci Durumları</h1>
        <UserList/>
      </div>
    </UserContext.Provider>
  )
}

const UserList = () => {
  // KODUNUZ BURAYA GELECEK
  const {userState} = useContext(UserContext)
  return (
    <ul className=" font-medium p-5">
      {Object.entries(userState).map(([name,isOnline]) =>(
        <li key={name}>{name} {isOnline ? "🟢" : "🔴"}</li>
      ))}
    </ul>
  )
};

export default App;
