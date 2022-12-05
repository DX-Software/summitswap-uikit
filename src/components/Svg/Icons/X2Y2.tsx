import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9.375" fill="white" />
      <path
        d="M18.0938 7.38303C16.9247 6.24604 15.3254 5.54531 13.5617 5.54531C9.98011 5.54531 7.0766 8.43518 7.0766 12C7.0766 15.5648 9.98011 18.4547 13.5617 18.4547C15.3254 18.4547 16.9247 17.754 18.0938 16.617C16.6992 18.4268 14.5044 19.5938 12.0358 19.5938C7.82213 19.5938 4.40625 16.1939 4.40625 12C4.40625 7.80608 7.82213 4.40625 12.0358 4.40625C14.5044 4.40625 16.6992 5.57317 18.0938 7.38303Z"
        fill="url(#paint0_linear_3313_46978)"
      />
      <path
        d="M8.71875 15.705C9.64762 16.6174 10.9182 17.1797 12.3195 17.1797C15.1652 17.1797 17.4721 14.8607 17.4721 12C17.4721 9.13933 15.1652 6.82031 12.3195 6.82031C10.9182 6.82031 9.64762 7.38262 8.71875 8.29501C9.82673 6.84266 11.5705 5.90625 13.5319 5.90625C16.8798 5.90625 19.5937 8.63451 19.5937 12C19.5937 15.3655 16.8798 18.0938 13.5319 18.0938C11.5705 18.0938 9.82673 17.1573 8.71875 15.705Z"
        fill="url(#paint1_linear_3313_46978)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5937 12C16.5937 14.5371 14.5371 16.5937 12 16.5937C9.46294 16.5937 7.40625 14.5371 7.40625 12C7.40625 9.46294 9.46294 7.40625 12 7.40625C14.5371 7.40625 16.5937 9.46294 16.5937 12ZM15.0625 12C15.0625 13.6914 13.6914 15.0625 12 15.0625C10.3086 15.0625 8.9375 13.6914 8.9375 12C8.9375 10.3086 10.3086 8.9375 12 8.9375C13.6914 8.9375 15.0625 10.3086 15.0625 12Z"
        fill="url(#paint2_linear_3313_46978)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3313_46978"
          x1="4.40625"
          y1="11.7381"
          x2="19.6654"
          y2="11.7381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00E0FF" />
          <stop offset="1" stop-color="#562EC8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3313_46978"
          x1="4.4391"
          y1="11.7373"
          x2="19.5938"
          y2="11.7373"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00E0FF" />
          <stop offset="1" stop-color="#562EC8" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3313_46978"
          x1="4.34375"
          y1="11.736"
          x2="19.6562"
          y2="11.736"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00E0FF" />
          <stop offset="1" stop-color="#562EC8" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
