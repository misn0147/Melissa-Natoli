import React from "react";
import { Disclosure} from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Nav(props) {
    const tabs = ["Home", "About", "Portfolio", "Contact"];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <span className="text-3xl font-serif text-lime-50">Melissa Natoli</span>
                            <div className="inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-lime-50 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:text-lime-50">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden md:block mobile-menu flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden md:block md:ml-6">
                                    <div className="flex space-x-4">
                                        {tabs.map((tab) => (
                                            <a
                                                key={tab}
                                                href={"#" + tab.toLowerCase()}
                                                onClick={() =>
                                                    props.handlePageChange(tab)
                                                }
                                                className={classNames(
                                                    props.currentPage === tab
                                                        ? "text-xl font-serif bg-gray-800 text-lime-200"
                                                        : "text-xl font-serif text-gray-300 hover:bg-gray-900 hover:text-lime-50",
                                                    "text-xl font-serif px-3 py-2 rounded-md text-sm font-medium text-lime-50"
                                                )}
                                            >
                                                {tab}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {tabs.map((tab) => (
                                <a
                                    key={tab}
                                    href={"#" + tab.toLowerCase()}
                                    onClick={() => props.handlePageChange(tab)}
                                    className={classNames(
                                        props.currentPage === tab
                                            ? "font-serif bg-gray-800 text-lime-200"
                                            : "font-serif text-gray-300 hover:bg-gray-700 hover:text-lime-50",
                                        "font-serif block px-3 py-2 rounded-md text-base font-medium text-lime-50"
                                    )}
                                >
                                    {tab}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Nav;
