import React from 'react'
import Link from "../assets/images/link.svg"

const LinkLogo = () => {
    return (
        <div className="flex items-center flex-shrink-0 px-4">
            <img
                className="h-6 w-auto"
                src={Link}
                alt="Workflow"
            />
        </div>
    )
}

export default LinkLogo
