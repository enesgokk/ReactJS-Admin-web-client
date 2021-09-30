import React, { useState, useEffect } from 'react'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'

const Pagination = ({ paginate, setPageIndex }) => {

    const numberOfPages = []
    for (let i = 1; i <= paginate; i++) {
        numberOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    setPageIndex(currentButton);

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons]
        let dotsInitial = '...';
        let dotsLeft = '...';
        let dotsRight = '...';

        if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length]
        }
        else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0, 5)
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }
        else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
        }
        else if (currentButton > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced])
        }
        else if (currentButton === dotsInitial) {
            setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
        }
        else if (currentButton === dotsLeft) {
            setCurrentButton(arrOfCurrButtons[3] + 2);
        }

        else if (currentButton === dotsRight) {
            setCurrentButton(arrOfCurrButtons[3] - 2);
        }
        setArrOfCurrButtons(tempNumberOfPages)
    }, [currentButton])

    return (
        <div className="sticky bottom-0 bg-gray-100 pb-5 ">
            <div className="flex w-full justify-between " >
                <a
                    href="#"
                    onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                >
                    <div className="flex border-t-2 border-transparent cursor-pointer pt-4 items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"><ArrowNarrowLeftIcon className=" h-5 w-5 text-gray-400" aria-hidden="true" />&nbsp;&nbsp;Geri</div>
                </a>
                <div>
                    {arrOfCurrButtons.map((page, index) => {
                        return (
                            <a
                                key={index}
                                onClick={() => page !== '...' ? setCurrentButton(page) : ''}
                                href="#"
                                className={currentButton === page ? 'mx-0 lg:mx-4 px-2 lg:px-4 cursor-pointer border-blue-600 text-blue-600 hover:text-gray-700 hover:border-gray-300  border-t-2 pt-4 inline-flex items-center text-sm font-medium  text-center' : 'mx-0 lg:mx-4 cursor-pointer px-2 lg:px-4 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4  inline-flex items-center text-sm font-medium'}
                            > {page}
                            </a>
                        )
                    })}
                </div>
                <a
                    href="#"
                    onClick={() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)}
                >
                    <div className=" border-t-2 border-transparent cursor-pointer pt-4 pl-1 inline-flex  items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">İleri<ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                </a>
            </div>
        </div>
    )
}

export default Pagination
