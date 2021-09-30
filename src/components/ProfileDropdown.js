import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import IconUser from './icons/IconUser'

const userData = [
    { id: 1, name: 'Favori Listelerim', href: '!#', },
    { id: 2, name: 'Siparişlerim', href: '!#', },
    { id: 3, name: 'Kuponlarım', href: '!#', },
    { id: 4, name: 'Yardım', href: '!#', },
  ]
  
  const user={
    id:1, userMail: "enes@blaccenterprises.com"
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const ProfileDropdown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full py-2 bg-white text-sm font-medium mr-10">
            <IconUser/>
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div  className="px-4 py-3">
              <p className="text-sm font-medium text-gray-900 truncate">{user.userMail}</p>
            </div>
            <div className="py-1">
              {userData.length &&
                <div>
                  {userData.map((user) =>
                    <Menu.Item key={user.id}>
                      {({ active }) => (
                        <a
                          href="!#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {user.name}
                        </a>
                      )}
                    </Menu.Item>
                  )}
                </div>
              }
  
            </div>
            <div className="py-1">
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm font-medium text-gray-900 truncate'
                      )}
                    >
                      Çıkış Yap
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
}

export default ProfileDropdown
