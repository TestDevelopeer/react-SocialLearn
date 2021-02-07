import React from "react";
import s from "./Paginator.module.css";

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return (
                    <span
                        key={p}
                        onClick={() => {
                            onPageChanged(p);
                        }}
                        className={currentPage === p ? s.selectedPage : ''}
                    > {p} </span>
                )
            })}
        </div>
    );
}

export default Paginator;