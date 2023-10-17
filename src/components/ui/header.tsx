import React from "react";
import Link from "next/link";
import style from "../styles/header.module.css";

export const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.nav}>
        <div className={style.textDiv}>
          <p>The best AI Fashion model on the entire internet</p>
        </div>
        <div className={style.menu}>
          <ul>
             <li><Link href={'/account'}>ACCOUNT</Link></li>
             <li>|</li>
            <li><Link href={'/gallery'}>GALLERY</Link></li>
            <li>|</li>
            <li><Link href={'/login'}>LOGIN</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
