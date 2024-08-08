import React, { useState } from "react";
import logo from "../../images/Ajio-Logo.svg";
import searchIcon from "../../images/searchIcon.png";
import styles from "./Navbar.module.css";
import men from "../../images/men.png"
const Navbar = () => {
  const navItems = ["MEN", "WOMEN", "KIDS", "BEAUTY", "HOME AND KITCHEN"];
  const [isMen, setIsMen] = useState(false);
  return (
    <div id={styles.navBar}>
      <div id={styles.navItems}>
        {/* {/* <div> */}
        <img className={styles.logo} src={logo} alt="" />
        {/* </div> */} 
        {navItems.map((ele, ind) => {
          return <div 
          onMouseEnter={()=>{setIsMen(true)}}
          onMouseLeave={()=>{setIsMen(false)}}
          style={{cursor:"pointer"}}
           key={ind}>{ele}</div>;
        })}
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            id={styles.searchBar}
            type="text"
            name=""
            placeholder="Search AJIO"
          />
          {/* <img id={styles.searchIcon} src={searchIcon} alt="SearchIcon" /> */}
          <svg
            id={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>

        <div className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        </div>
        <div className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-bag-check"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </svg>
        </div>
        <div className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
        </div>
      </div>
      <div 
      onMouseEnter={()=>{setIsMen(true)}}
      onMouseLeave={()=>{setIsMen(false)}}
      style={{display:`${isMen ? "block" : "none"}`, cursor: "pointer", position:"fixed", top:"59px"}}>
        <div style={{width:"100%",height:"20px", zIndex:"-1"}}></div>
        <img src={men} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
