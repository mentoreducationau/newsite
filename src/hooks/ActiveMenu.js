import React, { createContext, useContext, useState } from "react"

const ActiveMenuContext = createContext()

export const ActiveMenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <ActiveMenuContext.Provider
      value={{
        menuOpen,
        setMenuOpen
      }}
    >
      {children}
    </ActiveMenuContext.Provider>
  )
}

const useActiveMenu = () => {
  const context = useContext(ActiveMenuContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export default useActiveMenu
