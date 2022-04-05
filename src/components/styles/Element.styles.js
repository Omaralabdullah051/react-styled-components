import styled from 'styled-components';
import Title from '../Title/Title';

const Area = styled.p`
    color: darkblue;
    font-weight: 600;
`;

const Region = styled.p`
    color: darkgreen;
    font-weight: 500;
`;

//By default we can access any html elements from styled object.
//But we can take our own custom components to style it.
//Now we can apply any css styles on StyledTitle component. But these css styles will not work on Title component.StyledTitle component will pass all the css styles to Title component via className props. so we need to receive className props in Title component and read the className props in className attribute.

const StyledTitle = styled(Title)`
    color: ${(props) => props.color};
    font-weight: 700;
    font-size: 25px;
`;

export { Area, Region, StyledTitle };

