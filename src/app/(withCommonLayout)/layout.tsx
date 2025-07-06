import Footer from "@/components/Shared/Footer/Footer";
import Navber from "@/components/Shared/Navber/Navber"
import React from "react"

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navber />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default CommonLayout;