import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 12C21 16.9703 16.9703 21 12 21C7.02971 21 3 16.9703 3 12C3 7.02971 7.02971 3 12 3C16.9713 3 21 7.02971 21 12Z"
        fill="#2081E2"
      />
      <path
        d="M7.01636 11.905L7.06576 11.8579L10.0446 9.02864C10.0881 8.98722 10.1905 8.9915 10.2234 9.03649C10.7211 9.71362 11.1505 10.5557 10.9493 11.08C10.8634 11.2957 10.6281 11.5879 10.3634 11.8579C10.3293 11.8971 10.2917 11.9357 10.2516 11.9729C10.2328 11.99 10.2011 12 10.1669 12H7.10341C7.02106 12 6.97283 11.9457 7.01636 11.905Z"
        fill="white"
      />
      <path
        d="M18 13.3917V13.9722C18 14.0056 17.9798 14.0352 17.9505 14.0481C17.7708 14.1259 17.1558 14.4111 16.9 14.7704C16.2473 15.688 15.7487 17 14.634 17H9.98374C8.33559 17 7 15.6463 7 13.9759V13.9222C7 13.8778 7.03574 13.8417 7.07975 13.8417H9.67209C9.72341 13.8417 9.76099 13.8898 9.75642 13.9407C9.73808 14.1111 9.76925 14.2852 9.849 14.4435C10.003 14.7593 10.322 14.9565 10.6667 14.9565H11.95V13.9444H10.6813C10.6163 13.9444 10.5778 13.8685 10.6153 13.8148C10.6291 13.7935 10.6447 13.7713 10.6612 13.7463C10.7813 13.5741 10.9527 13.3065 11.1232 13.0019C11.2396 12.7963 11.3523 12.5769 11.4431 12.3565C11.4614 12.3167 11.4761 12.2759 11.4907 12.2361C11.5155 12.1657 11.5412 12.1 11.5595 12.0343C11.5778 11.9787 11.5925 11.9204 11.6072 11.8657C11.6503 11.6787 11.6686 11.4806 11.6686 11.275C11.6686 11.1944 11.6649 11.1102 11.6576 11.0296C11.6539 10.9417 11.6429 10.8537 11.6319 10.7657C11.6246 10.688 11.6108 10.6111 11.5962 10.5306C11.5778 10.413 11.5522 10.2963 11.5228 10.1787L11.5127 10.1343C11.4907 10.0537 11.4724 9.97686 11.4468 9.8963C11.3743 9.64351 11.2909 9.39722 11.2029 9.16667C11.1708 9.075 11.1342 8.98704 11.0975 8.89908C11.0434 8.76667 10.9884 8.6463 10.938 8.53241C10.9123 8.48055 10.8903 8.43333 10.8683 8.38518C10.8436 8.33055 10.8179 8.27592 10.7922 8.22408C10.7739 8.18426 10.7528 8.14722 10.7382 8.11018L10.5814 7.81759C10.5594 7.77778 10.5961 7.73055 10.6392 7.74259L11.62 8.0111H11.6228C11.6246 8.0111 11.6255 8.01204 11.6264 8.01204L11.7557 8.04814L11.8978 8.0889L11.95 8.1037V7.51482C11.95 7.23055 12.1755 7 12.4542 7C12.5935 7 12.72 7.05741 12.8108 7.15092C12.9015 7.24445 12.9583 7.37222 12.9583 7.51482V8.3889L13.0628 8.41851C13.0711 8.4213 13.0793 8.425 13.0867 8.43055C13.1123 8.45 13.149 8.47869 13.1957 8.5139C13.2324 8.54351 13.2718 8.57963 13.3195 8.61667C13.4139 8.69351 13.5267 8.79259 13.6504 8.90649C13.6834 8.93518 13.7155 8.96482 13.7448 8.99445C13.9043 9.14445 14.0831 9.32037 14.2536 9.51482C14.3013 9.56945 14.348 9.625 14.3957 9.68333C14.4433 9.74259 14.4938 9.80092 14.5377 9.85926C14.5955 9.93704 14.6578 10.0176 14.7119 10.1019C14.7376 10.1417 14.7669 10.1824 14.7917 10.2222C14.8613 10.3287 14.9228 10.4389 14.9814 10.5491C15.0062 10.6 15.0318 10.6556 15.0538 10.7102C15.1189 10.8574 15.1703 11.0074 15.2032 11.1574C15.2133 11.1898 15.2207 11.225 15.2243 11.2565V11.2639C15.2353 11.3083 15.239 11.3556 15.2427 11.4037C15.2573 11.5574 15.25 11.7111 15.217 11.8657C15.2032 11.9315 15.1849 11.9935 15.1629 12.0593C15.1409 12.1222 15.1189 12.188 15.0905 12.25C15.0355 12.3787 14.9704 12.5074 14.8934 12.6278C14.8687 12.6722 14.8393 12.7194 14.81 12.7639C14.7779 12.8111 14.7449 12.8556 14.7156 12.8991C14.6753 12.9546 14.6322 13.013 14.5882 13.0648C14.5488 13.1194 14.5084 13.1741 14.4644 13.2222C14.403 13.2954 14.3443 13.3648 14.2829 13.4315C14.2463 13.475 14.2068 13.5194 14.1665 13.5593C14.1271 13.6037 14.0867 13.6435 14.0501 13.6806C13.9887 13.7426 13.9373 13.7907 13.8942 13.8306L13.7934 13.9241C13.7788 13.937 13.7595 13.9444 13.7393 13.9444H12.9583V14.9565H13.941C14.161 14.9565 14.37 14.8778 14.5387 14.7333C14.5964 14.6824 14.8485 14.462 15.1464 14.1296C15.1565 14.1185 15.1693 14.1102 15.184 14.1065L17.8983 13.3139C17.9487 13.2991 18 13.338 18 13.3917Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
