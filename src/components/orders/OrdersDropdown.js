import { Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { createSalesInvoice } from "../../refactoredServices/orderRefactoredServices/OrderRefactoredServices"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const dropdownItems = [
    { id: 1, productName: 'Fatura Kes', href: '#', value: 'faturaKes' },
    { id: 2, productName: 'Fatura Maili Gönder', href: '#', value: 'mailGonder' },
    { id: 3, productName: 'Etiket Çıkart', href: '#', value: 'etiketCikart' },
]

const OrdersDropdown = ({ orderNumber, setUserName, orderName, setToasterCount }) => {

    return (
        <Menu as="div" className="inline-block text-left">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className=" z-0 h-7 w-7 bg-gray-100 rounded-full flex items-center shadow-md text-gray-400 hover:text-gray-600 focus:outline-none ">
                            <span className="sr-only">Open options</span>
                            <DotsVerticalIcon className=" mx-auto h-5 w-5  text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                        >
                            <div className="py-1 z-50">
                                {dropdownItems.map((items) => (
                                    <Menu.Item key={items.id}>
                                        {({ active }) => (
                                            <a
                                                href={items.href}
                                                onClick={() => items.id === 1 ? ((createSalesInvoice(orderNumber)),setUserName(orderName),setToasterCount(1)) : ''}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm z-50'
                                                )}
                                            >
                                                {items.productName}
                                            </a>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}
export default OrdersDropdown
