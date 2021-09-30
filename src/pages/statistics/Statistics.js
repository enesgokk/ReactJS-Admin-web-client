import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import DailyRevenue from '../../components/statistics/DailyRevenue'

const Statistics = () => {
    return (
        <div>
            <MainLayout>
                <h1 className="text-3xl font-semibold">İstatistikler</h1>
                <DailyRevenue />
            </MainLayout>
        </div>
    )
}

export default Statistics
