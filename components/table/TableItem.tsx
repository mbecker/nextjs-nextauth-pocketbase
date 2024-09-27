export default function TableItem() {
  return (
    <div className="group/row relative flex items-center justify-between rounded-lg border-0 bg-white p-3 ring-1 ring-gray-200 transition-all hover:bg-secondary hover:ring-gray-300 dark:bg-secondary dark:ring-gray-700 hover:dark:ring-gray-500 sm:p-4">
      <div className="flex min-w-0 shrink items-center space-x-2 sm:space-x-4">
        <div className="mx-0.5 flex w-8 items-center justify-center text-center sm:mx-1">
          <svg
            width={576}
            height={576}
            viewBox="0 0 576 576"
            fill="none"
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path fill="#000" d="M57 59h454v462H57z" />
              <path
                opacity=".999"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M497.5 31.5h-420c-24.333 6.333-39.667 21.667-46 46v420c6.333 24.333 21.667 39.667 46 46h420c24.333-6.333 39.667-21.667 46-46v-420c-6.333-24.333-21.667-39.667-46-46ZM103 360V215h57.184c10.994 0 20.359 2.1 28.097 6.301 7.738 4.154 13.636 9.936 17.693 17.346 4.105 7.364 6.158 15.86 6.158 25.489 0 9.629-2.076 18.125-6.228 25.488-4.152 7.363-10.168 13.098-18.047 17.205-7.833 4.106-17.316 6.159-28.451 6.159h-25.761V360H103Zm51.452-71.58h-20.807v-48.357h20.665c5.945 0 10.852 1.015 14.721 3.045 3.869 1.982 6.747 4.791 8.634 8.425 1.935 3.587 2.902 7.788 2.902 12.603 0 4.767-.967 8.991-2.902 12.673-1.887 3.635-4.765 6.49-8.634 8.567-3.822 2.03-8.681 3.044-14.579 3.044ZM283.417 360h-51.381V215h51.806c14.579 0 27.13 2.903 37.651 8.708 10.522 5.759 18.613 14.043 24.275 24.852 5.709 10.808 8.564 23.741 8.564 38.798 0 15.105-2.855 28.085-8.564 38.941-5.662 10.856-13.8 19.187-24.416 24.993-10.569 5.805-23.214 8.708-37.935 8.708Zm-20.736-26.267h19.463c9.058 0 16.678-1.605 22.859-4.815 6.228-3.256 10.899-8.283 14.013-15.08 3.161-6.844 4.742-15.671 4.742-26.48 0-10.714-1.581-19.47-4.742-26.267-3.114-6.797-7.761-11.8-13.942-15.009-6.181-3.21-13.801-4.815-22.86-4.815h-19.533v92.466ZM377.032 215v145h30.645v-59.897h58.953v-25.276h-58.953v-34.551H473V215h-95.968Z"
                fill="#fff"
              />
            </g>
            <rect
              x={16}
              y={16}
              width={544}
              height={544}
              rx={48}
              stroke="#000"
              strokeWidth={32}
            />
            <defs>
              <clipPath id="a">
                <rect
                  x={32}
                  y={32}
                  width={512}
                  height={512}
                  rx={32}
                  fill="#fff"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex-col">
          <div className="flex items-center">
            <h2 className="min-w-0 max-w-[150px] truncate text-sm font-semibold leading-6 text-foreground sm:max-w-md">
              <a
                className="w-full truncate"
                href="/documents/cm1c3xcyk000e666gqa4gqfbu"
              >
                <span>test.pdf</span>
                <span className="absolute inset-0" />
              </a>
            </h2>
          </div>
          <div className="mt-1 flex items-center space-x-1 text-xs leading-5 text-muted-foreground">
            <p className="truncate">Sep 21</p>
            <p>•</p>
            <p className="truncate">1 Link</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <a
          className="z-20 flex items-center space-x-1 rounded-md bg-gray-200 px-1.5 py-0.5 transition-all duration-75 hover:scale-105 active:scale-100 dark:bg-gray-700 sm:px-2"
          href="/documents/cm1c3xcyk000e666gqa4gqfbu"
        >
          <svg
            width={14}
            height={14}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3 text-muted-foreground sm:h-4 sm:w-4"
            shapeRendering="geometricPrecision"
          >
            <line x1={12} x2={12} y1={20} y2={10} />
            <line x1={18} x2={18} y1={20} y2={4} />
            <line x1={6} x2={6} y1={20} y2={16} />
          </svg>
          <p className="whitespace-nowrap text-xs text-muted-foreground sm:text-sm">
            2<span className="ml-1 hidden sm:inline-block">views</span>
          </p>
        </a>
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground transition-colors z-20 h-8 w-8 border-gray-200 bg-transparent p-0 hover:bg-gray-200 dark:border-gray-700 hover:dark:bg-gray-700 lg:h-9 lg:w-9"
          type="button"
          id="radix-:r8q:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-ellipsis-vertical h-4 w-4"
          >
            <circle cx={12} cy={12} r={1} />
            <circle cx={12} cy={5} r={1} />
            <circle cx={12} cy={19} r={1} />
          </svg>
        </button>
      </div>
    </div>
  );
}
