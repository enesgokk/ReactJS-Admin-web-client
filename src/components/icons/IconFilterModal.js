import React from 'react'
import adjustment from "../../assets/images/adjustment.svg"

const IconFilterModal = ({setOpenFilterModal}) => {
    return (
        <img className="cursor-pointer pr-5" onClick={()=> setOpenFilterModal(true)} src={adjustment} alt="adjustment" />
    )
}

export default IconFilterModal
