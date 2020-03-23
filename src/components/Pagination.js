import React, { useState } from 'react';
import { StyledPaginationButton, StyledPaginationUl } from './style';

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    console.log(props.url.split('&')[0].substr(78));

    const pageHandler = (url, page) => {
        if (currentPage !== page) {
            if (url[url.length - 1] === '/' || url.includes('?page')) {
                props.urlSetter(`?page=${page}`);
            } else if (url.includes('&page')) {
                props.urlSetter(`${url.split('&')[0].substr(78)}&page=${page}`);
            } else {
                props.urlSetter(`${url.substr(78)}&page=${page}`);
            }
            setCurrentPage(page);
        }
    }

    return(
        <StyledPaginationUl>
            <StyledPaginationUl>
            {[...Array(props.info.pages)].map((x, index) => index+1).map(page => {
                return <li key={page}><StyledPaginationButton onClick={() => pageHandler(props.url, page)}>{page}</StyledPaginationButton></li>
            })}
            </StyledPaginationUl>
        </StyledPaginationUl>
    )
}

export default Pagination;

// return <li key={page}><StyledPaginationButton onClick={() => props.url(prevState => prevState + `&page=` + page)} /></li>

// props.urlSetter(url.splice(-1) === '/' ? `?page=${}`