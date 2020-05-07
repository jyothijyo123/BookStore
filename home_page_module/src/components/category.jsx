import React from "react";
const Category = props => {
    return (
        <div className="mt-3 ml-1 mr-2">
            <ul className="list-group" >
                <h3 className="text-center">Categories</h3>
                {props.genres.map(genre => (
                    <li className= "list-group-item list-group-item-action list-group-item-light"
                        onClick={() => props.handleSelectedGenre(genre)}
                        key={genre.id}
                        className={
                            genre.id === props.selectedGenre
                                ? "list-group-item list-group-item-action list-group-item-light active"
                                : "list-group-item list-group-item-action list-group-item-light"
                        }
                    >
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;