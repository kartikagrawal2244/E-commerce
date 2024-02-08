import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaCartShopping } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useAuth } from '../Context/AuthContext';

const pages = [
    { name: 'Shopping Cart', to: '/shoppingcart' },
    { name: 'Confirmation', to: '/confirmation' },
]

const blog = [
    { name: 'Blog', to: '/blog' },
    { name: 'Single Blog', to: '/singleblog' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { totalquantity } = useCart();
    const { isLoggedIn, name , handlelogout } = useAuth();

    return (
        <header className="bg-white sticky z-10 top-0 shadow">

            <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 lg:order-none order-2">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-7 w-auto" src="/assets/logo.png" alt="" />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </Link>

                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>

                    <Link
                        to="/productlist"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Product List
                    </Link>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Pages
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 min-w-52 overflow-hidden rounded-3xl bg-[#B08EAD] shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {pages.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
                                        >
                                            <div className="flex-auto">
                                                <Link to={item.to} className="block font-semibold text-white">
                                                    {item.name}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact
                    </Link>
                </Popover.Group>

                <div className="flex order-3 lg:flex-1 justify-end items-center">
                    <Link to="/shoppingcart" className="relative text-sm font-semibold me-4 leading-6 text-gray-900">
                        <FaCartShopping fontSize={25} />
                        <sub className='absolute -top-1 -right-1 bg-[#B08EAD] text-white w-4 h-4 rounded-full flex items-center justify-center'>{totalquantity}</sub>
                    </Link>

                    {isLoggedIn ? (

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 md:w-40 w-20">
                                Welcome, {name}
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute top-full z-10 mt-3 md:min-w-32 min-w-24 overflow-hidden rounded-xl text-center bg-[#B08EAD] shadow-lg ring-1 ring-gray-900/5">
                                    <div>
                                        <div
                                            className="group flex items-center gap-x-6 rounded-lg p-2 py-3 text-sm leading-6"
                                        >
                                            <div className="flex-auto">
                                                <Link to="/login" onClick={handlelogout} className="block font-semibold text-white">
                                                    Log Out
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>


                    ) : (
                        <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                            <FiLogIn fontSize={25} />
                        </Link>
                    )}
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">

                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="/assets/logo.png" alt="" />
                        </Link>

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </Link>

                                <Link
                                    to="/productlist"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Product List
                                </Link>

                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Pages
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>

                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {pages.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.to}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                {/* <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Blog
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>

                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {blog.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.to}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure> */}


                                <Link
                                    to="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
