import { useState } from "react";
import { LinkButton } from "./Buttons";
import Icon from "./Icon";

export default function AsideMenu({ closeAsideMenu }) {
  const [closeAnim, setCloseAnim] = useState(false);
  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen bg-black/50
                transition-opacity delay-300 duration-300
                ${closeAnim ? "opacity-0" : "opacity-100"}
            `}
      onClick={() => {
        setCloseAnim(true);
        setTimeout(() => closeAsideMenu(false), 300);
      }}
    >
      <aside
        className={`absolute top-0 left-0
                flex flex-col items-center
                w-80 h-screen
                bg-white dark:bg-[#182d51]
                dark:text-gray-100
                transition duration-300
            ${closeAnim ? "opacity-0 -translate-x-full" : "opacity-100"}
            `}
      >
        <header className="flex items-center py-3 w-full border-b-2 border-gray-100">
          <button
            type="button"
            className="pl-6 w-1/4 text-4xl text-center leading-4"
            onClick={() => {
              setCloseAnim(true);
              setTimeout(() => closeAsideMenu(false), 300);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="w-2/4 text-xl text-center font-medium">
            Menu de Vistas
          </p>
        </header>
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 w-full">
          <ul class="space-y-2">
            <li class="border-b-2 rounded-lg">
              <a
                href="/"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span class="ml-3">Inicio</span>
              </a>
            </li>
            <li class="border-b-2 rounded-lg">
              <a
                href="/app/categories"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  ></path>
                </svg>
                <span class="ml-3">Categorías</span>
              </a>
            </li>
            <li class="border-b-2 rounded-lg">
              <a
                href="/app/scales"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span class="ml-3">Escalas</span>
              </a>
            </li>
            <li class="border-b-2 rounded-lg">
              <a
                href="/app/favorites"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
                <span class="ml-3">Favoritas</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
