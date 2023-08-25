import React, { useState } from 'react';

import {
  StyledButtonLog,
  StyledButtonReg,
  StyledDiv,
  StyledDivInputs,
  StyledDivItems,
  StyledForm,
  StyledH2,
  StyledInput,
  StyledLabels,
  StyledModalSection,
} from './LoginForm.styled';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import { Formik } from 'formik';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // const credentials = { email, password };
    // dispatch(loginThunk(credentials))
    //   .unwrap()
    //   .then(res => {
    //     toast.success(`Hello, ${res.user.name}`);
    //   })
    //   .catch(err => {
    //     toast.error('Try another data!!');
    //   });
  };
  return (
    <StyledModalSection>
      <StyledDiv>
        <StyledDivItems>
          <IconLogo />
          <StyledH2>Money Guard</StyledH2>
        </StyledDivItems>
        <Formik>
          <StyledForm onSubmit={handleSubmit}>
            <StyledDivInputs>
              <StyledLabels>
                <IconEmail />
                <StyledInput
                  name="email"
                  placeholder="E-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </StyledLabels>
            </StyledDivInputs>
            <StyledDivInputs>
              <StyledLabels>
                <IconLock />
                <StyledInput
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </StyledLabels>
            </StyledDivInputs>
            <StyledButtonLog type="submit">Log In</StyledButtonLog>
            <StyledButtonReg type="submit">Register</StyledButtonReg>
          </StyledForm>
        </Formik>
      </StyledDiv>
    </StyledModalSection>
  );
};

function IconLogo(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" fill="none">
      <path fill="#F5F5F5" d="M0 0h27v26H0z" />
      <g clipPath="url(#a)">
        <path fill="#101010" d="M-147-97h320v568h-320z" />
        <g filter="url(#b)">
          <circle cx="176.477" cy="385.809" r="181.191" fill="url(#c)" />
        </g>
        <g filter="url(#d)">
          <circle
            cx="-210.876"
            cy="-30.168"
            r="217.124"
            fill="url(#e)"
            fillOpacity=".73"
          />
        </g>
        <g filter="url(#f)">
          <circle
            cx="-183.516"
            cy="-96.516"
            r="86.484"
            fill="url(#g)"
            fillOpacity=".68"
          />
        </g>
        <g filter="url(#h)">
          <circle cx="223.678" cy="231.417" r="86.484" fill="#302E8E" />
        </g>
        <g filter="url(#i)">
          <circle cx="13" cy="187" r="227" fill="#2F15B0" fillOpacity=".73" />
        </g>
        <g filter="url(#j)">
          <path
            fill="#fff"
            fillOpacity=".1"
            d="M-147-97h320v568h-320z"
            shapeRendering="crispEdges"
          />
        </g>
        <g
          fillRule="evenodd"
          colorInterpolationFilters="url(#k)"
          clipRule="evenodd"
        >
          <path
            fill="#FFC727"
            d="M18.233 3.5c-1.803-.45-3.606-1.352-4.958-2.704C11.922 2.148 10.12 3.05 8.317 3.5c.45 4.057 1.803 6.761 4.958 9.015 3.155-2.254 4.958-4.958 4.958-9.015Z"
          />
          <path
            fill="#FBFBFB"
            d="M16.43 20.282 3.81 5.408v7.212l9.915 11.268 2.705-3.606ZM17.782 18.93l5.409-6.31V5.86l-8.564 9.915 3.155 3.156ZM18.233 21.184v4.057l4.958-5.86v-4.056l-4.958 5.86ZM8.767 21.184l-4.958-5.86v4.057l4.958 5.86v-4.057Z"
          />
        </g>
      </g>
      <defs>
        <filter
          id="b"
          width="849.617"
          height="849.617"
          x="-248.332"
          y="-38.999"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="121.809"
          />
        </filter>
        <filter
          id="d"
          width="921.484"
          height="921.484"
          x="-671.618"
          y="-490.91"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="121.809"
          />
        </filter>
        <filter
          id="f"
          width="416.586"
          height="416.587"
          x="-391.809"
          y="-304.809"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="60.904"
          />
        </filter>
        <filter
          id="h"
          width="538.395"
          height="538.395"
          x="-45.52"
          y="-37.781"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="91.357"
          />
        </filter>
        <filter
          id="i"
          width="854"
          height="854"
          x="-414"
          y="-240"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_0_1"
            stdDeviation="100"
          />
        </filter>
        <filter
          id="j"
          width="520"
          height="768"
          x="-247"
          y="-197"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="30" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="effect1_backgroundBlur_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <linearGradient
          id="c"
          x1="287.16"
          x2="142.686"
          y1="323.55"
          y2="498.089"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".035" stopColor="#6D54EB" />
          <stop offset=".901" stopColor="#652392" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="-78.242"
          x2="-251.367"
          y1="-104.775"
          y2="104.379"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".035" stopColor="#6D54EB" />
          <stop offset=".901" stopColor="#652392" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="-183.516"
          x2="-138.031"
          y1="-44.945"
          y2="-88.508"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8E2E79" />
          <stop offset="1" stopColor="#AB33AD" />
        </linearGradient>
        <colorInterpolationFilters id="a">
          <path fill="#fff" d="M-147-97h320v568h-320z" />
        </colorInterpolationFilters>
        <colorInterpolationFilters id="k">
          <path fill="#fff" d="M.77 0h25.46v25.46H.77z" />
        </colorInterpolationFilters>
      </defs>
    </svg>
  );
}

function IconEmail(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          fillOpacity=".4"
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
        />
      </g>
      <defs>
        <colorInterpolationFilters id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </colorInterpolationFilters>
      </defs>
    </svg>
  );
}

function IconLock(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          fillOpacity=".4"
          d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2Z"
        />
      </g>
      <defs>
        <colorInterpolationFilters id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </colorInterpolationFilters>
      </defs>
    </svg>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Formik
//           onSubmit={async values => {
//           await new Promise(resolve => setTimeout(resolve, 500));
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         <Form>
//           <Field type="email" name="email" required />
//           <Field type="password" name="password" required />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
