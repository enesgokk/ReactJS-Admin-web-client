import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BellIcon, } from '@heroicons/react/outline'

const notificationData = [
  { id: 1, data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos esse cumque blanditiis dicta consectetur quia deserunt error earum! Perspiciatis, deserunt dignissimos quo architecto ipsam reprehenderit ab ad nostrum ducimus.', href: '!#', },
  { id: 2, data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos esse cumque blanditiis dicta consectetur quia deserunt error earum! Perspiciatis, deserunt dignissimos quo architecto ipsam reprehenderit ab ad nostrum ducimus.', href: '!#', },
  { id: 3, data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos esse cumque blanditiis dicta consectetur quia deserunt error earum! Perspiciatis, deserunt dignissimos quo architecto ipsam reprehenderit ab ad nostrum ducimus.', href: '!#', },
  { id: 2, data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos esse cumque blanditiis dicta consectetur quia deserunt error earum! Perspiciatis, deserunt dignissimos quo architecto ipsam reprehenderit ab ad nostrum ducimus.', href: '!#', },
  { id: 3, data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos esse cumque blanditiis dicta consectetur quia deserunt error earum! Perspiciatis, deserunt dignissimos quo architecto ipsam reprehenderit ab ad nostrum ducimus.', href: '!#', },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NotificationDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full py-2 bg-white text-sm font-medium ">
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col overflow-y-scroll h-64 origin-top-right absolute  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none cursor-pointer ">
          {notificationData.map((notification) =>
              <Menu.Item key={notification.id}>
                {({ active }) => (
                  <a
                    href="!#"
                    className={classNames(
                      active ? 'bg-gray-100  text-gray-900 py-6 ' : ' py-6 text-gray-700',
                      'block px-4  text-sm   '
                    )}
                  >
                   <div className="flex flex-row w-full items-center">
                      <span className="h-2 w-20 min-w-max rounded-full bg-yellow-600 mr-2"></span>
                      <div className="truncate">{notification.data}</div> 
                   </div>
                   <a className=" text-gray-300 ml-4" href="!#">...devam</a>
                  </a>
                )}
              </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default NotificationDropdown
