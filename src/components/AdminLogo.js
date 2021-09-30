import React from 'react'
import Admin from "../assets/images/admin.svg"

const AdminLogo = () => {
    return (
        <div className="flex items-center flex-shrink-0 px-4">
            <img
                className="h-6 w-auto"
                src={Admin}
                alt="Workflow"
            />
        </div>
    )
}

export default AdminLogo
