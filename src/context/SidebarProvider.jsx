import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClose = ()=>{
        setIsOpen(false)
    }
    const sidebarInfo = {
        isOpen,
        setIsOpen,
        handleClose
    }

  return (
    <div>
      <SidebarContext.Provider value={sidebarInfo}>
        {children}
        </SidebarContext.Provider>
    </div>
  );
};

export default SidebarProvider;
