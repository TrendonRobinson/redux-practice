import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setZipcode } from "../features/search";
import { reset } from "../features/results";

export default function Zipcode() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.searchReducer.value);

    return (
        <div>
            <input
                name="Zipcode"
                placeholder="Enter zipcode"
                type="numeric"
                // value={zip}
                onChange={(e) => {
                    dispatch(reset());
                    dispatch(setZipcode({ zipcode: e.target.value }));
                }}
            />
        </div>
    );
}
