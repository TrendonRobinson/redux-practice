import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setBusinesses,
    setInitialCategories,
    setCategories,
    setDisplayedBusinesses,
} from "../features/results";

const corsApiUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey =
    "MnJ_QLBKGQO88Wst6Zv8i0_dwR35IHw6wkMM4SkkbqwVWCT3gK9D3TCWLEee-3jMLk-v8YPgJ6tF07WLf3e_zsgzjRzR8iWM669-sSAPepc4sGM8YQwL-iAAqOaXYXYx";

export default function Businesses() {
    const dispatch = useDispatch();

    const search = useSelector((state) => state.searchReducer.value);
    const results = useSelector((state) => state.resultReducer.value);

    function removeCategory(e, category) {
        e.preventDefault();

        // console.log(results);

        let categoryName = e.target.innerText;
        let categories = [...results.categories];

        categories.forEach((element, index) => {
            if (element[0] === categoryName) {
                return categories.splice(index, 1);
            }
        });

        dispatch(setCategories({ categories: categories }));

        // setCategories([...categories]);
        // console.log(results.categories.length);
        // setTrigger(!trigger)
    }

    function makeList(res) {
        let titleList = [];
        let initCategoryList = [];
        let categoryList = [];
        let biz = {};

        res.forEach((restaurant) => {
            restaurant.categories.forEach((element) => {
                biz[restaurant.id] = restaurant;
                initCategoryList.push([element.title, restaurant.id]);
            });
        });

        dispatch(setInitialCategories({ initialCategories: initCategoryList }));

        initCategoryList.forEach((element, index) => {
            if (titleList.includes(element[0])) {
            } else {
                titleList.push(element[0]);
                categoryList.push([element[0], element[1]]);
            }
        });

        // console.log(categoryList);

        dispatch(setCategories({ categories: categoryList }));
        // setBusinesses(biz);
        // console.log(businesses);
    }

    function onCategorySubmit(e) {
        let display = [];
        let trimmedDisplay = [];

        results.categories.forEach((category) => {
            results.businesses.forEach((restaurant) => {
                if (category[1] === restaurant.id) {
                    display.push(restaurant);
                }
            });
        });

        const uniqueBusinesses = new Set(display.map((item) => item));

        uniqueBusinesses.forEach((element) => {
            trimmedDisplay.push(element);
        });

        console.log(trimmedDisplay);
        dispatch(setBusinesses({ displayedBusinesses: trimmedDisplay }));
    }

    function onSubmit(e) {
        e.preventDefault(); // prevent refresh

        if (search.zipcode.toString().length === 5) {
            axios
                .get(`${corsApiUrl}https://api.yelp.com/v3/businesses/search`, {
                    headers: {
                        Authorization: `Bearer ` + apiKey,
                    },
                    params: {
                        location: search.zipcode,
                        radius: search.radius,
                        limit: search.limit,
                    },
                })
                .then((res) => {
                    dispatch(
                        setBusinesses({ businesses: res.data.businesses })
                    );

                    makeList(res.data.businesses);
                })
                .catch((error) => console.log(error.response));
        } else {
            alert("Zipcode is invalid!");
        }
    }

    // console.log(results.categories);
    return (
        <div>
            <button onClick={onSubmit}>Submit Zipcode</button>
            <h1>Businesses</h1>
            <ol className="flex flex-wrap justify-center align-center">
                {results.categories.map((category, key) => (
                    <button
                        key={key}
                        className="flex justify-center align-center p-3 rounded-2xl text-white m-3 bg-red-500 "
                        onClick={(e) => removeCategory(e, category)}
                    >
                        <li>{category[0]}</li>
                    </button>
                ))}
            </ol>
            <button onClick={onCategorySubmit} type="submit">
                SUBMIT CHOICES
            </button>

            <ol className="flex flex-wrap justify-center align-center">
                {results.displayedBusinesses.length > 1
                    ? results.displayedBusinesses.map((business, key) => {
                          return <p key={key}>{business.name}</p>;
                      })
                    : ""}
            </ol>
        </div>
    );
}
