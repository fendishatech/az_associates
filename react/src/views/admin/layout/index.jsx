import { Link, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../../../context/ContextProvider";
import axiosClient from "../../../api/axios-client.js";
import { useEffect } from "react";
import "../../../assets/styles/admin/style.css";

const AdminLayout = () => {
  const { user, token, setUser, setToken, notification } = useStateContext();

  const navigate = useNavigate();
  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
      navigate("/");
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout">
      <aside>
        <NavLink to="/admin/dashboard">Home</NavLink>
        <NavLink to="/admin/users">Users</NavLink>
        <NavLink to="/admin/blogs">Blog</NavLink>
        <NavLink to="/admin/jobs">Jobs</NavLink>
        <NavLink to="/admin/experiences">Experiences</NavLink>
      </aside>
      <div className="content">
        <header>
          <div></div>

          <div>
            {user.name} &nbsp; &nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </div>
  );
};

export default AdminLayout;
