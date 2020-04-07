import React, { useState, useEffect } from 'react';
import { StyledPaginationButton, StyledContainerDiv } from './style';

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        console.log(props.url);
        if (props.url.includes('&name')) {
            setCurrentPage(props.url.split('&')[0].split('=')[1]);
        } else if (props.url.includes('?page')) {
            setCurrentPage(props.url.split('=')[1]);
        } else {
            setCurrentPage(1);
        }
    }, [props.url])

    const nextPage = () => {
        if (currentPage < props.info.pages) {
            props.urlSetter(props.info.next);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            props.urlSetter(props.info.prev);
        }
    }
    // const pageHandler = (page, url) => {
        // if (currentPage !== page) {
        //     if (url[url.length - 1] === '/' || url.includes('?page')) {
        //         props.urlSetter(`?page=${page}`);
        //     } else if (url.includes('&page')) {
        //         props.urlSetter(`${url.split('&')[0].substr(78)}&page=${page}`);
        //     } else {
        //         props.urlSetter(`${url.substr(78)}&page=${page}`);
        //     }
        //     setCurrentPage(page);
        // }

    return(
        <StyledContainerDiv>
            <StyledPaginationButton onClick={() => prevPage()}>&lt;Prev</StyledPaginationButton><span>Page {currentPage} of {props.info.pages}</span><StyledPaginationButton onClick={() => nextPage()}>Next&gt;</StyledPaginationButton>
        </StyledContainerDiv>
        /* <StyledPaginationUl>
            {[...Array(props.info.pages)].map((x, index) => index+1).map(page => {
                return <li key={page}><StyledPaginationButton onClick={() => pageHandler(props.url, page)}>{page}</StyledPaginationButton></li>
            })}
        </StyledPaginationUl> */
    )
}

export default Pagination;

// return <li key={page}><StyledPaginationButton onClick={() => props.url(prevState => prevState + `&page=` + page)} /></li>

// props.urlSetter(url.splice(-1) === '/' ? `?page=${}`