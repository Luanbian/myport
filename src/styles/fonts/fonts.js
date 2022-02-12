import {createGlobalStyle} from 'styled-components';
import PoppinsRegularwoff1 from './Poppins.woff';
import PoppinsRegularwoff2 from './Poppins.woff2';
import PoppinsBoldwoff1 from './PoppinsBold.woff';
import PoppinsBoldwoff2 from './PoppinsBold.woff2';

export default createGlobalStyle` 
    @font-face {
        font-family: 'PoppinsRegular';
        src: local('Poppins'),
        url(${PoppinsRegularwoff2}) format('woff2'),
        url(${PoppinsRegularwoff1}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face{
        font-family: 'PoppinsBold';
        src: local('Poppins'),
        url(${PoppinsBoldwoff2}) format('woff2'),
        url(${PoppinsBoldwoff1}) format('woff');
        font-weight: 500;
        font-style: bold;
    }
`;