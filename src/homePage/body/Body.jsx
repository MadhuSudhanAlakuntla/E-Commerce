import React from 'react';
import styles from "./Body.module.css"
import bodyheader from "../../images/bodyheader.avif"
import img01 from "../../images/img01.avif"
import img02 from "../../images/img02.avif"
import img03 from "../../images/img03.avif"
import img04 from "../../images/img04.avif"
import img05 from "../../images/img05.avif"
import img06 from "../../images/img06.avif"
const Body = () => {
    const images = [img01, img02, img03, img04, img05, img06];
    return (
        <div>
            <img className={styles.image} src={bodyheader} alt="" />
            <div id={styles.allimages}>
            {
                images.map((img,ind)=> <div key = {ind}  >
                    <img style={{width:"100%", cursor:"pointer"}} src={img} alt="" />
                </div>)
            }
            </div>
            
        </div>
    );
}

export default Body;
