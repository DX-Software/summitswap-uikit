import React from 'react'
import styled from 'styled-components'
import { Box } from '../../../components/Box'
import Skeleton from "../../../components/Skeleton/Skeleton"

interface Props {
    coinPriceUsd?: number;
    token: string;
}

const CashState: React.FC<Props> = ({coinPriceUsd, token}) => {
    return (
        <StyledContainer>
            {token == 'KODA' && <KodaLogoIcon />}
            {token == 'KAPEX' && <KapexLogoIcon />}
            {coinPriceUsd ? (
                <Box>{`$${coinPriceUsd.toFixed(8)}`}</Box>
            ) : (
                <Skeleton width={100} height={24} />
            )}
        </StyledContainer>
    )
}

const KodaLogoIcon = styled.div`
    width: 32px;
    height: 32px;
    background: url(https://raw.githubusercontent.com/Koda-Finance/summitswap-data/main/images/coins/koda.png);
    background-size: 100% 100%;
    margin: 6px 0px;
    margin-right: 4px;
`
const KapexLogoIcon = styled.div`
    width: 32px;
    height: 32px;
    background: url(https://raw.githubusercontent.com/Koda-Finance/summitswap-data/main/images/coins/kapex.png);
    background-size: 100% 100%;
    margin: 6px 0px;
    margin-right: 4px;
`

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    >div:nth-of-type(2) {
        font-weight: 700;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.sidebarColor};
    }
`

export default CashState
