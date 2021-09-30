import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendar from "../../assets/images/calendar.svg"
import PlatformDropdown from './PlatformDropdown';
import vector from "../../assets/images/vector.svg"
import { XIcon } from '@heroicons/react/outline'
import dateFormat from "dateformat";

const FilterModal = ({ setOpen, open, setStartDate, setEndDate }) => {

    const [startDateInput, setStartDateInput] = useState(new Date());
    const [endDateInput, setEndDateInput] = useState(new Date());
    const cancelButtonRef = useRef(null)
    const inputVal=useRef();

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-left md:text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl h-auto md:h-96 transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6">
                        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 outline-none focus:outline-none "
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            
                            <div className="flex justify-center w-full ">

                                <div className=" mt-3 md:mt-3 text-left  sm:mt-0 ">
                                    <Dialog.Title as="h3" className="text-3xl leading-6 font-normal text-gray-900">
                                        Filtreler
                                    </Dialog.Title>

                                    <div>
                                        <div className="flex flex-col md:flex-row  mt-6 items-center">
                                            <div className="mb-4 md:mb-0" >
                                                <label htmlFor="email" className="block text-md font-medium text-gray-700">
                                                    Müşteri Adı
                                                </label>
                                                <div className="mt-1 w-full">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        className="shadow-sm py-2 pl-2 px-4  focus:ring-indigo-500 focus:border-indigo-500 flex w-72 sm:text-sm border border-gray-300 rounded-md outline-none "
                                                        placeholder="Tony Stark"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col md:flex-row justify-center -mb-1" >

                                                <div className="ml-0 md:ml-20 mb-4 md:mb-0" >
                                                    <label htmlFor="email" className="ml-0 md:ml-2 block text-sm font-medium text-gray-700">
                                                        Başlangıç Tarihini Seç
                                                    </label>
                                                    <div className="flex mt-1 shadow-sm py-3 pl-2 px-4   focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md outline-none ">
                                                        <DatePicker selected={startDateInput} onChange={(date) => setStartDateInput(date)} ref={inputVal} className=" outline-none text-gray-400 font-normal  w-60 md:w-auto" />
                                                        <img src={calendar} alt="calendar" />
                                                    </div>
                                                </div>

                                                <div className="ml-0 md:ml-4" >
                                                    <label htmlFor="email" className="ml-0 md:ml-2 block text-sm font-medium text-gray-700">
                                                        Bitiş Tarihini Seç
                                                    </label>
                                                    <div className="flex mt-1 shadow-sm py-3 pl-2 px-4  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md outline-none ">
                                                        <DatePicker selected={endDateInput} onChange={(date) => setEndDateInput(date)} className=" outline-none text-gray-400 font-normal w-60 md:w-auto" />
                                                        <img src={calendar} alt="calendar" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div>
                                            <div className=" flex flex-col md:flex-row mt-6  justify-between" >
                                                <div className="mb-4 md:mb-0">
                                                    <label htmlFor="email" className="block text-md font-medium text-gray-700">
                                                        Sipariş Numarası
                                                    </label>
                                                    <div className="mt-1 w-full">
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            id="email"
                                                            className="shadow-sm py-2 pl-2 px-4  focus:ring-indigo-500 focus:border-indigo-500 flex w-72 sm:text-sm border border-gray-300 rounded-md outline-none "
                                                            placeholder="784234121"
                                                        />
                                                    </div>
                                                </div>
                                                <PlatformDropdown />
                                            </div>
                                        </div>

                                        <div className="mt-0 md:mt-16" >
                                            <div className="flex flex-col md:flex-row-reverse mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                                <div className="flex bg-indigo-600 rounded-md px-6" >
                                                <img className="cursor-pointer" src={vector} alt="vector" />
                                                    <button
                                                        type="button"
                                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm py-2 pr-4 md:pr-0 text-base font-normal text-white  focus:outline-none sm:ml-3 sm:w-auto sm:text-lg"
                                                        onClick={()=> (setStartDate('StartDate='+dateFormat(startDateInput,"yyyy-mm-dd"), setEndDate('EndDate='+dateFormat(endDateInput,"yyyy-mm-dd") , setOpen(false))))}
                                                    >
                                                        Filtrele 
                                                    </button>
                                                </div >
                                                <button
                                                    type="button"
                                                    className="mt-3 mr-0 md:mr-8 w-full inline-flex justify-center rounded-md px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:w-auto sm:text-lg"
                                                    onClick={() => setOpen(false)}
                                                    ref={cancelButtonRef}
                                                >
                                                    Temizle
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default FilterModal
