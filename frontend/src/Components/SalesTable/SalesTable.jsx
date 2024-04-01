import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FcFullTrash } from "react-icons/fc";
import Swal from 'sweetalert2'
function SalesTable({ data, index, setSaleId, setDeleteConifrmation, handleItemClick, setDataId }) {

    function handleDeleteButton() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setSaleId(data._id);
                setDeleteConifrmation(true);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    function handleEditButton(item) {
        handleItemClick(item);
        setDataId(data._id);
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.product}</td>
            <td>{data.quantity}</td>
            <td>{data.unitPrice}</td>
            <td>{data.totalAmount}</td>
            <td>{data.customer}</td>
            <td>{data.salesperson}</td>
            <td className='fs-4' role='button' onClick={() => handleEditButton('Form')}><FaRegEdit /></td>
            <td className='fs-4' role='button' onClick={handleDeleteButton} ><FcFullTrash /></td>
        </tr>
    )
}

export default SalesTable