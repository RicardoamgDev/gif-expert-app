import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( NewCategory ) => {
        // console.log(NewCategory);
        // categories.push( NewCategory );

         setCategories([ NewCategory, ...categories]);

    }



    return (

        <>
            {/* TITULO */}
            <h1> GifExpertApp </h1>

            {/* INPUT */}
            <AddCategory 
            // setCategories={setCategories} 
                onNewCategory = { (value) => onAddCategory(value) }
            />

            <ol>

                {
                    categories.map(category, i => {
                        return <li key={category}> {category} </li>
                    })
                }

                {/* <li> ABC </li> */}

            </ol>
            {/* Gif Item */}


        </>
    )





}
