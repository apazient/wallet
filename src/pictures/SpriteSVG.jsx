import React from 'react';

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'home-page': //для зміни кольору використовувати fill
      return (
        <svg id="icon-home-page" viewBox="0 0 32 32">
          <path d="M5.053 0c-2.791 0-5.053 2.262-5.053 5.053v21.895c0 2.79 2.262 5.053 5.053 5.053h21.895c2.79 0 5.053-2.262 5.053-5.053v-21.895c0-2.791-2.262-5.053-5.053-5.053h-21.895zM13.418 17.987v6.902h-5.754v-9.203h-3.453l11.509-10.353 11.509 10.353h-3.453v9.203h-5.754v-6.902h-4.604z"></path>
        </svg>
      );
    case 'currency': //для зміни кольору використовувати fill
      return (
        <svg id="icon-currency" viewBox="0 0 32 32">
          <path d="M5.053 0c-2.791 0-5.053 2.262-5.053 5.053v21.895c0 2.79 2.262 5.053 5.053 5.053h21.895c2.79 0 5.053-2.262 5.053-5.053v-21.895c0-2.791-2.262-5.053-5.053-5.053h-21.895zM13.265 13.136c0 0.995 0.765 1.635 3.144 2.253s4.925 1.635 4.925 4.61c0 2.148-1.624 3.332-3.667 3.72v2.253h-3.143v-2.274c-2.012-0.43-3.73-1.718-3.856-4.013h2.305c0.115 1.236 0.964 2.2 3.123 2.2 2.316 0 2.829-1.153 2.829-1.876 0-0.974-0.524-1.896-3.143-2.525-2.923-0.702-4.925-1.907-4.925-4.327 0-2.022 1.635-3.342 3.667-3.783v-2.263h3.143v2.295c2.19 0.534 3.29 2.19 3.363 3.992h-2.316c-0.063-1.31-0.754-2.2-2.619-2.2-1.771 0-2.829 0.796-2.829 1.938z"></path>
        </svg>
      );
    case 'statistic': //для зміни кольору використовувати fill
      return (
        <svg id="icon-statistic" viewBox="0 0 32 32">
          <path d="M5.053 0h21.895c2.79 0 5.053 2.262 5.053 5.053v21.895c0 2.79-2.262 5.053-5.053 5.053h-21.895c-2.791 0-5.053-2.262-5.053-5.053v-21.895c0-2.791 2.262-5.053 5.053-5.053zM24.842 13.941c1.081 0 1.965-0.926 1.965-2.058s-0.884-2.059-1.965-2.059c-1.081 0-1.965 0.926-1.965 2.059 0 0.185 0.020 0.36 0.069 0.525l-3.488 3.664c-0.157-0.051-0.334-0.072-0.511-0.072s-0.354 0.021-0.511 0.072l-2.505-2.624c0.049-0.165 0.069-0.35 0.069-0.535 0-1.132-0.884-2.058-1.965-2.058s-1.965 0.926-1.965 2.058c0 0.185 0.020 0.371 0.069 0.535l-4.48 4.683c-0.157-0.051-0.324-0.072-0.501-0.072-1.081 0-1.965 0.926-1.965 2.059s0.884 2.058 1.965 2.058 1.965-0.926 1.965-2.058c0-0.185-0.020-0.36-0.069-0.525l4.47-4.693c0.157 0.051 0.334 0.072 0.511 0.072s0.354-0.021 0.511-0.072l2.505 2.625c-0.049 0.165-0.069 0.35-0.069 0.535 0 1.132 0.884 2.059 1.965 2.059s1.965-0.926 1.965-2.059c0-0.185-0.020-0.371-0.069-0.535l3.498-3.654c0.157 0.051 0.324 0.072 0.501 0.072z"></path>
        </svg>
      );
    case 'calendar': //для зміни кольору використовувати fill
      return (
        <svg id="icon-calendar" viewBox="0 0 32 32">
          <path d="M12 14.667h-2.667v2.667h2.667v-2.667zM17.333 14.667h-2.667v2.667h2.667v-2.667zM22.667 14.667h-2.667v2.667h2.667v-2.667zM25.333 5.333h-1.333v-2.667h-2.667v2.667h-10.667v-2.667h-2.667v2.667h-1.333c-1.48 0-2.653 1.2-2.653 2.667l-0.013 18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM25.333 26.667h-18.667v-14.667h18.667v14.667z"></path>
        </svg>
      );
    case 'minus': //для зміни кольору використовувати stroke
      return (
        <svg id="icon-minus" viewBox="0 0 320 32">
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="32"
            d="M0 16l320-0"
          ></path>
        </svg>
      );
    case 'plus': //для зміни кольору використовувати stroke
      return (
        <svg id="icon-plus" viewBox="0 0 32 32">
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M16 0v32"
          ></path>
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M0 16h32"
          ></path>
        </svg>
      );
    case 'close': //для зміни кольору використовувати stroke
      return (
        <svg id="icon-close" viewBox="0 0 32 32">
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="1.7778"
            d="M1.778 1.778l28.444 28.444"
          ></path>
          <path
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="4"
            strokeWidth="1.7778"
            d="M1.778 30.222l28.444-28.444"
          ></path>
        </svg>
      );
    case 'edit': //для зміни кольору використовувати fill
      return (
        <svg id="icon-edit" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.56"
            d="M23.467 13.511l-4.978-4.978M4.178 27.823l4.212-0.468c0.515-0.057 0.772-0.086 1.012-0.164 0.213-0.069 0.416-0.167 0.604-0.29 0.211-0.139 0.394-0.322 0.76-0.688l16.435-16.434c1.375-1.375 1.375-3.603 0-4.978s-3.603-1.375-4.978 0l-16.434 16.434c-0.366 0.366-0.549 0.549-0.688 0.76-0.123 0.187-0.221 0.39-0.29 0.604-0.078 0.24-0.106 0.498-0.164 1.012l-0.468 4.212z"
          ></path>
        </svg>
      );
    case 'exit': //для зміни кольору використовувати fill
      return (
        <svg id="icon-exit" viewBox="0 0 32 32">
          <path d="M20.051 23.237h2.499v4.997c0 2.067-1.681 3.748-3.748 3.748h-15.054c-2.066 0-3.748-1.681-3.748-3.748v-24.486c0-2.066 1.681-3.748 3.748-3.748h15.054c2.067 0 3.748 1.681 3.748 3.748v4.997h-2.499v-4.997c0-0.689-0.56-1.249-1.249-1.249h-15.054c-0.689 0-1.249 0.561-1.249 1.249v24.486c0 0.689 0.561 1.249 1.249 1.249h15.054c0.689 0 1.249-0.561 1.249-1.249v-4.997zM26.111 10.102l-1.767 1.767 2.873 2.874h-16.161v2.499h16.161l-2.873 2.873 1.767 1.767 5.889-5.889-5.889-5.89z"></path>
        </svg>
      );
    case 'email': //для зміни кольору використовувати fill
      return (
        <svg id="icon-email" viewBox="0 0 32 32">
          <path d="M26.667 5.333h-21.333c-1.467 0-2.653 1.2-2.653 2.667l-0.013 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667zM26.667 10.667l-10.667 6.667-10.667-6.667v-2.667l10.667 6.667 10.667-6.667v2.667z"></path>
        </svg>
      );
    case 'password': //для зміни кольору використовувати fill
      return (
        <svg id="icon-password" viewBox="0 0 32 32">
          <path d="M24 10.667h-1.333v-2.667c0-3.68-2.987-6.667-6.667-6.667s-6.667 2.987-6.667 6.667v2.667h-1.333c-1.467 0-2.667 1.2-2.667 2.667v13.333c0 1.467 1.2 2.667 2.667 2.667h16c1.467 0 2.667-1.2 2.667-2.667v-13.333c0-1.467-1.2-2.667-2.667-2.667zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667c1.467 0 2.667 1.2 2.667 2.667s-1.2 2.667-2.667 2.667zM20.133 10.667h-8.267v-2.667c0-2.28 1.853-4.133 4.133-4.133s4.133 1.853 4.133 4.133v2.667z"></path>
        </svg>
      );
    case 'user':
      return (
        <svg id="icon-user" viewBox="0 0 32 32">
          <path d="M4 6.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667h-18.667c-1.48 0-2.667 1.2-2.667 2.667zM20 12c0 2.213-1.787 4-4 4s-4-1.787-4-4c0-2.213 1.787-4 4-4s4 1.787 4 4zM8 22.667c0-2.667 5.333-4.133 8-4.133s8 1.467 8 4.133v1.333h-16v-1.333z"></path>
        </svg>
      );
    case 'logo':
      return (
        <svg id="icon-logo" viewBox="0 0 32 32">
          <path
            fill="#ffc727"
            style={{ fill: 'var(--color1, #ffc727)' }} // Fix for style attribute
            d="M21.94 4.396c-2.263-0.566-4.526-1.698-6.223-3.397-1.697 1.698-3.96 2.83-6.223 3.397 0.566 5.095 2.263 8.491 6.223 11.322 3.96-2.831 6.223-6.227 6.223-11.322z"
          ></path>
          <path
            fill="#fbfbfb"
            style={{ fill: 'var(--color2, #fbfbfb)' }} // Fix for style attribute
            d="M19.677 25.474l-15.84-18.681v9.057l12.446 14.152 3.394-4.529z"
          ></path>
          <path
            fill="#fbfbfb"
            style={{ fill: 'var(--color2, #fbfbfb)' }} // Fix for style attribute
            d="M21.374 23.776l6.789-7.925v-8.491l-10.749 12.454 3.96 3.963z"
          ></path>
          <path
            fill="#fbfbfb"
            style={{ fill: 'var(--color2, #fbfbfb)' }} // Fix for style attribute
            d="M21.94 26.606v5.095l6.223-7.359v-5.095l-6.223 7.359z"
          ></path>
          <path
            fill="#fbfbfb"
            style={{ fill: 'var(--color2, #fbfbfb)' }} // Fix for style attribute
            d="M10.060 26.606l-6.223-7.359v5.095l6.223 7.359v-5.095z"
          ></path>
        </svg>
      );
    case 'currencyEllipse': //для зміни кольору використовувати fill
      return (
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.5" cy="4.5" r="4" fill="#563EAF" stroke="#FF868D" />
        </svg>
      );
    case 'currencyLine': //для зміни кольору використовувати fill
      return (
        <svg
          width="480"
          height="102"
          viewBox="0 0 480 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 68.5585L38.4 43.1037C41.728 40.3298 50.9952 34.7819 61.44 34.7819C71.8848 34.7819 80.128 38.6981 82.944 40.6561L165.12 96.461C167.424 98.0927 174.49 101.356 184.32 101.356C194.15 101.356 201.216 98.0927 203.52 96.461L345.6 8.83226C349.184 6.22151 357.12 1 367.104 1C377.088 1 386.048 6.22151 390.144 8.83226L420.864 29.3919C422.912 30.6973 429.312 33.3081 438.528 33.3081C447.744 33.3081 452.727 30.4637 454.656 29.3919C461.379 25.6567 466.207 21.6267 474.624 22.0492C475.705 22.1035 478.251 22.335 480 23.0282"
            stroke="#FF868D"
          />
        </svg>
      );
    case 'currencyWave': //для зміни кольору використовувати fill
      return (
        <svg
          width="480"
          height="167"
          viewBox="0 0 480 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z"
            fill="url(#paint0_linear_15_252)"
            fillOpacity="0.6"
          />
          <path
            d="M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z"
            fill="#390096"
            fillOpacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_15_252"
              x1="240"
              y1="18.5"
              x2="240"
              y2="146"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop
                offset="0.374892"
                stopColor="white"
                stopOpacity="0.536458"
              />
              <stop offset="0.6091" stopColor="white" stopOpacity="0.269957" />
              <stop
                offset="0.766012"
                stopColor="white"
                stopOpacity="0.151176"
              />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
