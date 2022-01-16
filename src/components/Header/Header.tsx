import * as React from 'react';
import { StyledHeader } from './style';

export interface IHeaderProps {
    name?: string;
}

const Header: React.FC<IHeaderProps> = (props) => {

    const { name } = props;

    return (
        <StyledHeader>
            {name}
        </StyledHeader>
    )

}


export default Header;