//Global style
//  *{
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
// }

//if we want apply global styles on styled-component we need to follow these process.

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;