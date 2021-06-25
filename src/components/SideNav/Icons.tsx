import React from 'react'
import styled from 'styled-components'

const IconsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  transform: scale(1.6);
  transform-origin: left center;

  svg {
    fill: gray;

    &:hover {
      fill: ${(props) => props.theme.colors.phala};
      cursor: pointer;
    }
  }
`

const Icons: React.FC<React.ComponentProps<typeof IconsWrap>> = (props) => {
  return (
    <IconsWrap {...props}>
      <a target="__blank" href="https://wiki.phala.network">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.085503 0.515877C0 0.697581 0 0.932219 0 1.4015V6.5985C0 7.06778 0 7.30242 0.085503 7.48412C0.174516 7.67329 0.326714 7.82548 0.515877 7.9145C0.697581 8 0.932219 8 1.4015 8H6.5985C7.06778 8 7.30242 8 7.48412 7.9145C7.67329 7.82548 7.82548 7.67329 7.9145 7.48412C8 7.30242 8 7.06778 8 6.5985V1.4015C8 0.932219 8 0.697581 7.9145 0.515877C7.82548 0.326714 7.67329 0.174516 7.48412 0.085503C7.30242 0 7.06778 0 6.5985 0H1.4015C0.932219 0 0.697581 0 0.515877 0.085503C0.326714 0.174516 0.174516 0.326714 0.085503 0.515877ZM5.40585 1.85695H4.39855C4.38255 1.8922 4.37516 1.93075 4.377 1.96943C4.37883 2.00811 4.38985 2.04579 4.40912 2.07935C4.68736 2.12171 4.6627 2.27703 4.46195 2.67945L4.10974 3.38546L4.08157 3.35369L3.77515 2.64768C3.59553 2.24879 3.58144 2.1323 3.84207 2.08994C3.86118 2.05473 3.8712 2.01529 3.8712 1.97521C3.8712 1.93513 3.86118 1.89569 3.84207 1.86048H2.67276C2.65395 1.89579 2.64411 1.93519 2.64411 1.97521C2.64411 2.01523 2.65395 2.05463 2.67276 2.08994C2.94043 2.12877 3.00031 2.22761 3.21515 2.72181L3.7505 3.97498L3.02848 5.53526H3.01087L1.80986 2.64415C1.64433 2.24526 1.66194 2.1323 2.07049 2.08641C2.08961 2.0512 2.09962 2.01176 2.09962 1.97168C2.09962 1.9316 2.08961 1.89216 2.07049 1.85695H0.693383C0.674714 1.89319 0.665564 1.9336 0.666797 1.97436C0.668029 2.01512 0.679604 2.0549 0.700427 2.08994C1.03985 2.12234 1.07664 2.21421 1.23562 2.61121C1.24985 2.64675 1.26506 2.68474 1.28156 2.72534L2.69037 6.28716C2.72911 6.38953 2.76785 6.44601 2.83829 6.44601C2.90874 6.44601 2.95452 6.39306 2.99326 6.28716L3.95125 4.26444L4.82472 6.28716C4.85641 6.38953 4.9022 6.44601 4.97264 6.44601C5.04308 6.44601 5.08182 6.39306 5.12761 6.28716L6.66673 2.72887C6.67785 2.70259 6.68855 2.6767 6.69906 2.65129C6.81837 2.36262 6.91254 2.13479 7.30422 2.08288C7.32333 2.04767 7.33334 2.00823 7.33334 1.96815C7.33334 1.92807 7.32333 1.88863 7.30422 1.85342H6.08912C6.07001 1.88863 6.06 1.92807 6.06 1.96815C6.06 2.00823 6.07001 2.04767 6.08912 2.08288C6.50824 2.12171 6.52233 2.30527 6.36736 2.68298L5.12761 5.54232H5.10295L4.27528 3.70317L4.76836 2.7324L4.77184 2.72527C4.92872 2.40377 5.05623 2.14247 5.40585 2.08641C5.42466 2.0511 5.43449 2.0117 5.43449 1.97168C5.43449 1.93166 5.42466 1.89226 5.40585 1.85695Z"
          />
        </svg>
      </a>

      <a target="__blank" href="https://t.me/phalanetwork">
        <svg
          width="9"
          height="8"
          viewBox="0 0 9 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.551767 3.48402L5.91276 1.10949C6.44196 0.862139 8.23663 0.0706266 8.23663 0.0706266C8.23663 0.0706266 9.06494 -0.27566 8.99591 0.565322C8.9729 0.911609 8.78884 2.12361 8.60477 3.43455L8.02955 7.31791C8.02955 7.31791 7.98354 7.88681 7.59239 7.98575C7.20124 8.08469 6.557 7.63946 6.44196 7.54052C6.34993 7.46632 4.71632 6.35326 4.1181 5.80909C3.95704 5.66068 3.77297 5.36387 4.1411 5.01758C4.96941 4.20133 5.95878 3.18721 6.557 2.5441C6.83311 2.24729 7.10921 1.55471 5.95878 2.39569L2.71457 4.7455C2.71457 4.7455 2.34644 4.99284 1.65618 4.77023C0.965922 4.54762 0.160621 4.2508 0.160621 4.2508C0.160621 4.2508 -0.391584 3.87978 0.551767 3.48402Z" />
        </svg>
      </a>

      <a target="__blank" href="https://twitter.com/PhalaNetwork">
        <svg
          width="10"
          height="9"
          viewBox="0 0 10 9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.98765 8.34277C6.57273 8.34277 8.53328 5.26526 8.53328 2.59654C8.53328 2.50914 8.53156 2.42213 8.52776 2.33549C8.90921 2.04949 9.23844 1.69536 9.5 1.2897C9.15077 1.45056 8.77495 1.55884 8.38074 1.60766C8.78311 1.35761 9.09205 0.962122 9.2378 0.490624C8.85517 0.72582 8.43661 0.891611 8.00014 0.980851C7.64446 0.5883 7.13813 0.342773 6.57742 0.342773C5.50106 0.342773 4.62822 1.24722 4.62822 2.36208C4.62822 2.52057 4.64534 2.67473 4.67878 2.82258C3.05886 2.73812 1.62244 1.93448 0.661102 0.7125C0.487959 1.02068 0.396882 1.37097 0.397178 1.72757C0.397178 2.42824 0.741277 3.0468 1.26454 3.40866C0.955025 3.39888 0.652303 3.31226 0.381812 3.15607C0.381525 3.16456 0.381525 3.17282 0.381525 3.18187C0.381525 4.15994 1.05337 4.97656 1.94521 5.1616C1.77771 5.20888 1.60487 5.23278 1.43126 5.23269C1.30832 5.2326 1.18566 5.2204 1.06494 5.19625C1.31309 5.9987 2.03262 6.58263 2.8857 6.59895C2.2186 7.14074 1.37825 7.46343 0.46492 7.46343C0.30779 7.46343 0.152572 7.45418 0 7.43549C0.862608 8.00839 1.88687 8.34267 2.98774 8.34267"
            fillOpacity="0.9"
          />
        </svg>
      </a>
    </IconsWrap>
  )
}

export default Icons