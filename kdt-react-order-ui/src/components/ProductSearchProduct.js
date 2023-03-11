import React from "react";

export function ProductSearchProduct(props) {
    const orderId=props.orderId;
    const email=props.email;
    const address=props.address;
    const postcode=props.postcode;
    const status=props.status;

    return <>
        <td >{orderId}</td>
        <td >{email}</td>
        <td >{address}</td>
        <td >{postcode}</td>
        <td >{status}</td>
    </>

}