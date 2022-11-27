import "./ProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCalls";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProducts(id, dispatch);
  };
  console.log(products);
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="image" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row._id}`}>
              <button className="productListEdit"> Edit </button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <Link to="/newProduct">
        <button className="createProduct">Create a Product</button>
      </Link>
      <DataGrid
        disableSelectionOnClick
        rows={products}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
