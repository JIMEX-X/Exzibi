"use client";
import { SectionName } from "@/lib/types";
import React, { useContext, useState } from "react";

type ActiveSectionProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  React.createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({children}: ActiveSectionProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                timeOfLastClick,
                setActiveSection,
                setTimeOfLastClick
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}


export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext)

    if (!context) {
        throw new Error("useActiveState must be used within a ActiveSectionContextProvider")
    }

    return context
}