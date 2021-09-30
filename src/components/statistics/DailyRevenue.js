import React, { useState, useEffect } from 'react'
import { getDailyRevenue } from '../../refactoredServices/refactorStatisticsServices/StatisticsRefactorServices';

const DailyRevenue = () => {
    
    const [revenue, setRevenue] = useState();

    useEffect(() => {
        async function loadDailyRevenue() {
            setRevenue(await getDailyRevenue())
        }
        loadDailyRevenue();
    }, [])

    return (
        <div className="bg-white w-max py-3 pl-3 pr-32 rounded-lg shadow-md mb-4 md:mb-0 mt-6" >
            <h1 className="text-sm text-gray-500 font-semibold" >Günlük Ciro</h1>
            <p className="text-3xl font-semibold" >{revenue}</p>
        </div>
    )
}

export default DailyRevenue
