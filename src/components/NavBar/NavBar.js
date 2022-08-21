import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CartWidget from "../CartWidget/CartWidget";

const menuItems = [
  {
    name: "INICIO",
    href: "/",
  },
  {
    name: "CONSOLAS",
    href: "category/consoles",
  },
  {
    name: "JUEGOS",
    href: "category/games",
  },
  {
    name: "ACCESORIOS",
    href: "category/accessories",
  },
  {
    name: "GIFT CARDS",
    href: "category/giftcards",
  },
];

let activeClassDesktop =
  "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
let activeClassMobile =
  "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium";
let inactiveClassDesktop =
  "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
let inactiveClassMobile =
  "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-slate-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Boton del menu Movil*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir menu principal</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to={"/"}>
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="/logo_mobile.svg"
                      alt="Full Games"
                    />
                  </Link>
                  <Link to={"/"}>
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/logo_desktop.svg"
                      alt="Full Games"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {menuItems.map((item) => (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        className={({ isActive }) =>
                          isActive ? activeClassDesktop : inactiveClassDesktop
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              {/*Agrego icono del carrito*/}
              <Link to={"cart"}>
                <CartWidget />
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive ? activeClassMobile : inactiveClassMobile
                    }
                  >
                    {item.name}
                  </NavLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default NavBar;
