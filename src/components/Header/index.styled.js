import STYLE_CONSTS from '../../styles/consts';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

export const StyledHeader = styled(Box)`
    height: ${STYLE_CONSTS.HEADER_HEIGHT};
    width: 100%;
    padding: 16px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    .logo {
        line-height: unset;
    }
`


// .header {
//     height: 70px;
//     width: 100%;
//     padding: 16px;
//     box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
//     display: flex;
//     flex-direction: column;
//     box-sizing: border-box;
//     align-items: center;
//     justify-content: center;
// }

// .logo {
//     line-height: unset;
// }