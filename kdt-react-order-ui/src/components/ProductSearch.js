import React, {useState} from "react";

import {ProductSearchProduct} from "./ProductSearchProduct";

export function ProductSearch({orders=[], onSearchClick},props) {

    const [search, setsearch] = useState({
       email: ""
    });
    const handleEmailInputChanged = (e) => setsearch({...search, email: e.target.value})


    const handleSubmit = (e) => {
        if (search.email === ""){
            alert("입력값을 확인하세요!")
        }else{
            onSearchClick(search);
        }
    }
    return (
        <React.Fragment>
            <form id ="frm">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control mb-1" value={search.email} onChange={handleEmailInputChanged} id="email"/>
                </div>
            </form>
            <button className="btn btn-dark col-12" onClick={handleSubmit} >검색</button>
            <table className="table table-hover table-striped text-center">
                <thead>
                <tr>
                    <th scope="col">order_id</th>
                    <th scope="col">email</th>
                    <th scope="col">address</th>
                    <th scope="col">postcode</th>
                    <th scope="col">order_status</th>
                </tr>
                </thead>

                <tbody>
                {orders.map(v =>
                    <tr key={v.orderId}>
                        <ProductSearchProduct {...v}/>
                    </tr>
                )}
                </tbody>
            </table>

        </React.Fragment>
    )
}