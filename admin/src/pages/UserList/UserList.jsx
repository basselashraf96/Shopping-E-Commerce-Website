import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUsers, deleteUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
const noAvatarImg =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.img || noAvatarImg}
              alt="avatar"
            />{" "}
            {params.row.username}{" "}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`}>
              <button className="userListEdit"> Edit </button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <Link to="/newUser">
        <button className="createUser">Create a User</button>
      </Link>

      <DataGrid
        disableSelectionOnClick
        rows={users}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
