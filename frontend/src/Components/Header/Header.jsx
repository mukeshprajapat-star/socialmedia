import React, {Fragment,useEffect,useRef } from "react";
import { Menubar } from "primereact/menubar";
//import { InputText } from "primereact/inputtext";
import logo from "./logo1.jpg";
//import {Avatar} from "primereact/avatar"
import Avatar from "@material-ui/core/Avatar";
import { useDispatch,useSelector } from "react-redux";
import { Menu } from 'primereact/menu';
import {logoutUser} from "../../Actions/User"
import {useAlert} from 'react-alert';
import { Button } from "primereact/button";

const Header = ({history}) => {
  const alert=useAlert();
  const dispatch=useDispatch();

  const menu = useRef(null);
    const { user, isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
      if (isAuthenticated === false) {
        history.push("/login");
      }
    });
    function logoutUsers(){
      dispatch(logoutUser());
      alert.success("Logout Successfully");
    }

  const items = [
    {
      icon: "pi pi-fw pi-home",
      url:"/"
    },

    {
      icon: "pi pi-fw pi-plus-circle",
      url:"/newpost"
    },
    {
      icon:"pi pi-fw pi-search",
      url:"/search"
    },
  ];
  const item = [
            {
                label: 'Profile',
                icon: 'pi pi-user',
                url:"/account"
            },
            {
                label: 'Update Password',
                icon: 'pi pi-external-link',
                url:"/update/password"
            },
];

  const start = <img alt="logo" src={logo} height="45" className="mr-2"></img>;
  const end = (
    <div style={{ display: "flex" }}>
      <Button    className="p-button-sm" onClick={logoutUsers}>Logout</Button>
      <Avatar
        style={{ marginLeft: "50px", marginRight: "40px" ,cursor:"pointer"}}
        src={user.avatar.url}
        onClick={(event) => menu.current.toggle(event)}
      />
      
    </div>
   
  );

  return (
        <Fragment>
          <div>
            <div className="card" >
              <Menubar model={items} start={start} end={end} style={{paddingLeft:"20px"}}/>
            </div>
            <Menu model={item} popup ref={menu} id="popup_menu" />
          </div>
        </Fragment>
  );
};

export default Header;

