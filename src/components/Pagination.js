import React from 'react';
import { StyledPaginationButton, StyledPaginationUl } from './style';

const Pagination = (props) => {
    return(
        <StyledPaginationUl>
            {props.pages.map(page => {
                return <li><StyledPaginationButton onClick={() => props.url(prevState => prevState + `&page=` + page)}></StyledPaginationButton></li>
            })}
        </StyledPaginationUl>
    )
}

export default Pagination;