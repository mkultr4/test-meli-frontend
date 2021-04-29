import React from "react";
// Props
interface CategoriesProps {
    categories: Array<string>

}
// Categories
const Categories = (props: CategoriesProps) => {
    const { categories } = props;
    return (
        <>
            <ul className="categories">
                {categories.length > 0 && categories.map((category, key) => <li key={key}>{category}</li>)}
            </ul>
        </>
    )
}

export default Categories;