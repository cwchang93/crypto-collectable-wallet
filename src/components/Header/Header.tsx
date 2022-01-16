import * as React from 'react';
import { StyledHeader } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export interface IHeaderProps {
    name?: string;
    onClickBack?: () => void;
}

const Header: React.FC<IHeaderProps> = (props) => {

    const { name, onClickBack } = props;

    return (
        <StyledHeader>
            {onClickBack &&
                <FontAwesomeIcon className="backIcon" icon={faChevronLeft} onClick={onClickBack} />
            }
            {name}
        </StyledHeader>
    )

}


export default Header;