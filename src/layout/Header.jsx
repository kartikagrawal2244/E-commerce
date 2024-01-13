import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { CgSearch } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const products = [
    { name: 'Product List', to: '/productlist' },
    // { name: 'Product Details', to: '/productdetail' },
]

const pages = [
    { name: 'Product Checkout', to: '/productcheckout' },
    { name: 'Shopping Cart', to: '/shoppingcart' },
    { name: 'Confirmation', to: '/confirmation' },
]

const blog = [
    { name: 'Blog', to: '/blog' },
    { name: 'Single Blog', to: '/singleblog' },
]

const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [search, setSearch] = useState()
    const { totalquantity } = useCart();

    return (
        <header className="bg-white sticky z-10 top-0">

            <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="/assets/images/logo.png.webp" alt="" />
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

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Product
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
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 min-w-44 overflow-hidden rounded-3xl bg-[#B08EAD] shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
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

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Blog
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
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 min-w-44 overflow-hidden rounded-3xl bg-[#B08EAD] shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {blog.map((item) => (
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

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/shoppingcart" className="relative text-sm font-semibold me-4 leading-6 text-gray-900">
                        <FaCartShopping fontSize={25} />
                        <sub className='absolute -top-1 -right-1 bg-[#B08EAD] text-white w-4 h-4 rounded-full flex items-center justify-center'>{totalquantity}</sub>
                    </Link>

                    <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                        <FiLogIn fontSize={25} />
                    </Link>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">

                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="/assets/images/logo.png.webp" alt="" />
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

                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>

                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="Link"
                                                        to={item.to}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

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
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <Disclosure as="div" className="-mx-3">
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
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>


                                <Link
                                    to="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </Link>
                            </div>
                            
                            {/* 
                            <div className="py-6">
                                <Link to="/shoppingcart"
                                    className="relative -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <FaCartShopping fontSize={25} />
                                    <sub className='absolute top-1 left-7 bg-[#B08EAD] text-white w-4 h-4 rounded-full flex items-center justify-center'>{totalquantity}</sub>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

            {/* 
            <div className='bg-[#B08EAD]'>
                <input type="search" name="" id="" placeholder='Search Here' className='w-full focus:outline-none' />
            </div> */}
        </header>
    )
}
