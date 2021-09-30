
import React, { useState } from 'react'
import IconFilterModal from "../icons/IconFilterModal"
import FilterModal from "./FilterModal"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const OrderTab = ({tabData, setPicked, setStartDate, setEndDate}) => {

    const [openFilterModal, setOpenFilterModal] = useState(false)
    
    const tabs = [
        { objectName: 'New', name: 'Yeni', href: '#', count: tabData?.newStatusedItems, current: false },
        { objectName: 'Picked', name: 'Paketlenen', href: '#', count: tabData?.pickedStatusedItems, current: false },
        { objectName: 'Shipped', name: 'Kargolanan', href: '#', count: tabData?.shippedStatusedItems, current: false },
        { objectName: 'Paid', name: 'Ödemesi Gereken', href: '#', count: tabData?.paidStatusedItems === 0 ? '0' : tabData?.tabData?.paidStatusedItems, current: false },
        { objectName: 'Returned', name: 'İptal & İade', href: '#', count: tabData?.returnedAndCancelledStatusedItems === 0 ? '0' : tabData?.tabData?.paidStatusedItems, current: false },
    ]

    return (
        <div className="flex justify-between mb-4" >
            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        defaultValue={tabs.find((tab) => tab).name}
                    >
    
                    </select>
                </div>
                <div className="hidden sm:block">
                    <div className="border-b border-gray-100">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setPicked(tab.objectName)}
                                    className={classNames(
                                        tab.current
                                            ? 'border-indigo-500 text-indigo-600  '
                                            : 'border-transparent text-gray-500 hover:border-indigo-500 hover:text-indigo-600  focus:border-indigo-500 focus:text-indigo-600 ',
                                        'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm '
                                    )}
                                    aria-current={tab.current ? 'page' : undefined}
                                >
                                    {tab.name}
                                    {tab.count ? (
                                        <span
                                            className={classNames(
                                                tab.current ? 'bg-indigo-100 text-indigo-600 hover:bg-indigo-100 focus:bg-indigo-100 focus:text-indigo-600' : 'focus:bg-indigo-100 focus:text-indigo-600  hover:bg-indigo-100 hover:text-indigo-600 bg-white text-gray-900',
                                                'hidden ml-1 py-0.5 px-2.5 rounded-full text-xs font-medium lg:inline-block '
                                            )}
                                        >
                                            {tab.count}
                                        </span>
                                    ) : null}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex">
                <IconFilterModal setOpenFilterModal={setOpenFilterModal} />
            </div>
            {openFilterModal === true && <FilterModal setOpen={setOpenFilterModal} open={openFilterModal} setStartDate={setStartDate} setEndDate={setEndDate} />}



        </div>
    )
}

export default OrderTab
