import React, { useEffect, useState } from 'react'
import CustomToaster from './CustomToaster';

const ToasterList = ({ toasterCount, setToasterCount, userName }) => {

    const [list, setList] = useState([]);
    let toastPropaerties = null;

    useEffect(()=>{
        const showToast = () => {
            toastPropaerties = {
                id: list.length + 1,
                title: 'Başarılı',
                content: userName + ' Faturası Kesildi',
                backgroundColor: 'relative bg-green-400 rounded-xl px-2 mb-2 transition duration-500 ease-in-out transform -translate-x-1 hover:scale-110 z-50 overflow-hidden'
            }
            setList([...list, toastPropaerties]);
        }
        toasterCount===1 &&  showToast()
    },[toasterCount])

   setToasterCount(0);
        
    return (
        <CustomToaster toastList={list} setList={setList} />
    )
}

export default ToasterList
