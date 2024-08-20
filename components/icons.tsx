import React from "react";

export const Icons = {
  gun: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 5h16v4h-1v1h-6a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H9.62c-.38 0-.73.22-.9.56l-2.45 4.89c-.17.34-.51.55-.89.55H2s-3 0 1-6c0 0 3-4-1-4V5h1l.5-1h3zm7 7v-1a1 1 0 0 0-1-1h-1s-1 1 0 2a2 2 0 0 1-2-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1"
      />
    </svg>
  ),
  prisoner: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 4v16M14 4v16M6 4v5m0 6v5m4-16v5m1 0H5v6h6zm-1 6v5m-2-8h-.01"
      />
    </svg>
  ),
  heist: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h48v48H0z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711q-.33.165-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a16 16 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6m-6.442 4.616a25 25 0 0 1-2.901-.728C16.978 8.875 20.377 7.8 24.04 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081m15.96 5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997S41.913 24.61 33.557 15.68M23 24a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 25 22m0 8v4a2 2 0 1 0 0-4"
          clipRule="evenodd"
        />
      </g>
    </svg>
  ),
  timeDinamite: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M280 67.77c-2.8 2.78-4.1 9.46-.7 20.04c3.4 10.59 11.3 23.59 22.8 35.39c11.5 11.7 24.3 19.9 34.9 23.5c10.5 3.7 17.2 2.4 20-.3c2.8-2.8 4.2-9.5.8-20.1s-11.3-23.6-22.8-35.32c-11.6-11.76-24.4-19.94-34.9-23.57c-6.2-1.5-15-4.44-20.1.36m89.1-1.84c-4 0-6.9 1.05-8.5 2.62c-2.8 2.78-4.1 9.45-.7 20.04c3.4 10.58 11.3 23.61 22.8 35.31c11.5 11.8 24.3 20 34.9 23.6c10.5 3.6 17.2 2.4 20-.4c2.8-2.7 4.2-9.4.8-20s-11.3-23.6-22.8-35.35c-11.6-11.76-24.4-19.94-34.9-23.56c-4.6-1.59-8.5-2.25-11.6-2.26M260.4 86.97l-31.2 30.63c5.8 17.4 13.4 32.7 24.2 44.8c12.8 14.5 29.9 24.9 55.1 29.7l1.5.3l27.4-26.8c-2.1-.5-4.2-1.1-6.3-1.9c-14-4.8-28.7-14.4-41.9-27.9s-22.5-28.4-27.1-42.48c-.7-2.18-1.2-4.44-1.7-6.35m-58.3 57.13L81.3 262.4c5.7 16.5 13.2 31.1 23.5 42.7c12.8 14.5 29.9 24.9 55.1 29.7l4 .7l118-115.6c-37-11.4-63-38.6-79.8-75.8m180 13.8c-4 0-6.9 1-8.5 2.6c-2.8 2.8-4.1 9.5-.7 20c3.4 10.6 11.3 23.6 22.8 35.4s24.3 19.9 34.9 23.6c10.5 3.6 17.2 2.4 20-.4c.7-.7 1.3-1.6 1.8-2.8c13.2 11.3 24.3 26.2 25.3 35.8c1.3 11.7-3.5 21.7-12.8 32.4c-9.4 10.7-23.2 21.2-37.4 32c-14.1 10.7-28.5 21.6-39.3 34.4c-10.7 12.9-17.9 28.7-14.7 46.4c2.9 15.6 11.3 31.8 25.1 42.9c13.7 11.2 33.4 16.8 55.1 9.7l8.6-2.8l-5.6-17.1l-8.6 2.8c-16.3 5.3-28.4 1.5-38.2-6.5s-16.6-20.9-18.6-32.2c-2.1-11.6 1.9-21.1 10.7-31.6c8.9-10.5 22.4-21 36.4-31.7c14.1-10.7 28.8-21.7 40-34.5c11.2-12.7 19.2-28.3 17.2-46.1c-2.2-20.4-18.9-37.8-35.6-51c-4-3.2-8.1-6.1-12.1-8.6c-4.2-8.6-10.7-18.1-19.3-26.9c-11.6-11.8-24.4-19.9-34.9-23.6c-4.6-1.5-8.5-2.2-11.6-2.2M354 179.7l-27.3 26.8l.2 1.5c4.2 25.3 14.3 42.7 28.5 55.8c11.9 11 27.1 19 44.3 25.1l31.3-30.6q-3.15-.75-6.3-1.8c-14-4.8-28.7-14.5-41.9-28s-22.5-28.4-27.1-42.4c-.7-2.2-1.2-4.3-1.7-6.4M298.6 234L180.5 349.6l.7 4c4.1 25.3 14.2 42.6 28.5 55.7c11.4 10.6 25.7 18.4 42.2 24.4l120-117.5c-36.8-17.8-63.1-44.6-73.3-82.2M55.68 287.5c-11.64 9-23.69 22.4-34.25 33.5c-2.84 2.8-4.19 9.5-.79 20.1c3.41 10.6 11.32 23.6 22.83 35.3c11.52 11.8 24.36 20 34.87 23.6s17.21 2.4 20.04-.4c12.72-12.3 25.72-25.1 36.62-35.8c-36.88-11.6-62.65-38.9-79.32-76.3m95.12 91.2c-12.2 11.4-20.2 19.3-35.8 35.1c-2.8 2.8-4.2 9.4-.8 20s11.3 23.6 22.8 35.4c11.6 11.7 24.4 19.9 34.9 23.5c10.5 3.7 17.2 2.5 20.1-.3c11.3-10.6 21.6-21.2 32.4-31.8c-36.8-17.8-63.2-44.5-73.6-81.9"
      />
    </svg>
  ),
  punch: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M198.844 64.75q-1.477-.001-2.97.094c-15.915 1.015-32.046 11.534-37.78 26.937c-34.072 91.532-51.085 128.865-61.5 222.876c14.633 13.49 31.63 26.45 50.25 38.125l66.406-196.467l17.688 5.968L163.28 362.5c19.51 10.877 40.43 20.234 62 27.28l75.407-201.53l17.5 6.53l-74.937 200.282c19.454 5.096 39.205 8.2 58.78 8.875L381.345 225.5l17.094 7.594l-75.875 170.656c21.82-1.237 43.205-5.768 63.437-14.28c43.317-53.844 72.633-109.784 84.5-172.69c5.092-26.992-14.762-53.124-54.22-54.81l-6.155-.282l-2.188-5.75c-8.45-22.388-19.75-30.093-31.5-32.47s-25.267 1.535-35.468 7.376l-13.064 7.47l-.906-15c-.99-16.396-10.343-29.597-24.313-35.626c-13.97-6.03-33.064-5.232-54.812 9.906l-10.438 7.25l-3.812-12.125c-6.517-20.766-20.007-27.985-34.78-27.97zM103.28 188.344C71.143 233.448 47.728 299.56 51.407 359.656c27.54 21.84 54.61 33.693 80.063 35.438c14.155.97 27.94-1.085 41.405-6.438c-35.445-17.235-67.36-39.533-92.594-63.53l-3.343-3.157l.5-4.595c5.794-54.638 13.946-91.5 25.844-129.03z"
      />
    </svg>
  ),
  uruguay: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="#0038a8"
        d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-1H0zm0-8h36v4H0z"
      />
      <path fill="#eee" d="M0 23h36v3H0z" />
      <path fill="#0038a8" d="M36 9a4 4 0 0 0-4-4H16v4zm-20 3h20v4H16z" />
      <path fill="#eee" d="M16 9V5H4a4 4 0 0 0-4 4v10h36v-3H16v-4h20V9z" />
      <path fill="#ffd983" d="M13 12a5 5 0 1 0-10 0a5 5 0 0 0 10 0" />
      <path fill="#ffcc4d" d="M12 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0" />
      <path
        fill="#ffac33"
        d="m8 5.597l.633 4.041l2.569-3.183l-1.473 3.816l3.816-1.473l-3.183 2.569l4.041.633l-4.041.633l3.183 2.569l-3.816-1.473l1.473 3.816l-2.569-3.183L8 18.403l-.633-4.041l-2.569 3.183l1.473-3.816l-3.816 1.473l3.183-2.569L1.597 12l4.041-.633l-3.183-2.569l3.816 1.473l-1.473-3.816l2.569 3.183z"
      />
      <path fill="#c1694f" d="M11 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0" />
      <path
        fill="#ffac33"
        d="M5.834 12.004a2.153 2.153 0 1 1 4.307-.001a2.153 2.153 0 0 1-4.307.001"
      />
    </svg>
  ),
  museum: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.5 0L1 3.5V4h13v-.5zM2 5v5l-1 1.6V13h13v-1.4L13 10V5zm2 1h1v5.5H4zm3 0h1v5.5H7zm3 0h1v5.5h-1z"
      />
    </svg>
  ),
  calendar: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
      />
    </svg>
  ),
  newspaper: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="currentColor"
        d="M57.247 24.222c.973-2.628 1.254-5.134.555-7.383q-.484.044-.998.044C46.562 16.883 28.46 4.006 27.09 2C21.445 10.223 9.613 16.545 4.265 23.635c-2.164 2.869-3.246 5.004-1.093 8.286l22.549 28.973c1.017 1.377 3.01 1.489 4.429.219c0 0 18.492-23.729 31.851-31.071c-1.004-1.961-2.675-3.918-4.754-5.82M25.328 54.754l-.094.065l-.085.074a5.8 5.8 0 0 0-.912 1.041L4.699 30.831c-1.407-2.177-1.008-3.323 1.063-6.067c2.349-3.113 6.103-6.135 10.078-9.334c4.132-3.326 8.388-6.75 11.514-10.646c5.16 4.246 19.593 13.621 28.932 13.964c1.12 10.997-21.682 29.536-30.958 36.006"
      />
      <path
        fill="currentColor"
        d="m19.993 14.158l25.205 19.75l.898-.804L20.649 13.57zm8.214 10.513l-10.316-8.632s-3.59 2.292-7.938 7.319l9.152 9.462zM5.606 28.06l19.468 23.861l3.595-3.217L7.913 24.973s-1.809.979-2.307 3.087m21.814 1.368l11.309 10.27l3.593-3.217l-11.775-9.852zm-6.254 5.599l10.377 11.104l3.592-3.216l-10.842-10.687zm6.691-24.271l-1.525 4.282l.956.696l4.855-4.347l-.95-.598l-3.345 2.995l1.479-4.174l-.992-.626l-4.627 4.142l.829.603zm4.155 8.423l.926-.831l-2.825-2.008l1.281-1.146l2.509 1.718l.891-.799l-2.537-1.694l1.058-.946l2.809 1.817l.912-.815l-3.884-2.452l-4.918 4.403zm3.009 2.192l3.839-2.325l1.257-.796l-.834 1.078l-2.47 3.351l1.193.869l7.388-3.799l-1.402-.885l-4.051 2.318l-1.034.626l.694-.913l2.401-3.287l-1.348-.85l-3.745 2.321l-.995.629l.685-.871l2.268-3.207l-1.264-.798l-3.661 5.753zm13.886.334c-.909-.571-1.758-.844-2.552-.828q-1.18.026-1.943.71q-.839.75-.563 1.557q.16.483 1.039 1.408l.607.638q.543.565.697.92q.15.36-.146.624q-.506.45-1.315.174a3.8 3.8 0 0 1-.938-.515c-.57-.406-.847-.797-.84-1.174q.006-.309.338-.708l-1.311-.914q-.888.792-.667 1.774c.149.661.656 1.313 1.536 1.955c.877.643 1.75.987 2.608 1.025c.867.037 1.581-.191 2.131-.686q.81-.724.578-1.551c-.098-.353-.373-.764-.817-1.232l-.995-1.05q-.567-.593-.682-.828q-.18-.358.13-.634q.337-.302.865-.249q.535.053 1.118.428q.531.342.741.708q.321.553-.175 1.06l1.477.973q.92-.889.577-1.878q-.337-.98-1.498-1.707"
      />
    </svg>
  ),
  shot: ({ ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="m33.385 18.482l179.818 179.82c15.992-12.5 32.854-21.332 49.008-25.884c6.11-1.722 12.21-2.827 18.142-3.232L129.646 18.482zM18.1 94.508v22.414l143.933 143.933a148 148 0 0 1 7.87-14.544L18.1 94.51zm0 48.844v21.718l133.513 133.514c.357-6.05 1.454-12.282 3.192-18.527zm267.76 44.308c-5.534-.06-11.76.824-18.58 2.746c-18.187 5.125-39.366 17.645-58.06 36.338c-18.693 18.693-31.214 39.874-36.34 58.06c-5.124 18.187-2.865 32.154 4.983 40.003s21.816 10.107 40.002 4.982c2.79-.787 5.657-1.767 8.57-2.897c-4.446 35.305 2.834 81.353 22.27 137.377c7.042-107.06 40.21-77.135 84.346 18.867c-25.618-105.636 50.953-72.313 151.733 8.195c-82.658-96.046-104.87-162.764 10.524-134.658c-113.18-40.95-130.87-81.878-33.092-84.97c-63.505-23.373-114.68-32.166-153.004-27.345c1.2-3.05 2.23-6.05 3.054-8.97c5.124-18.186 2.867-32.155-4.98-40.003c-4.906-4.905-12.203-7.627-21.425-7.727zm-15.63 20.928c7.007.084 13.038 2.182 17.358 6.502c7.242 7.242 8.227 19.295 3.96 32.7c-32.244 8.713-52.945 29.435-61.653 61.358c-13.234 4.11-25.11 3.073-32.274-4.09c-13.822-13.824-4.888-45.17 19.956-70.013c17.08-17.08 37.233-26.642 52.653-26.457"
      />
    </svg>
  ),
};
