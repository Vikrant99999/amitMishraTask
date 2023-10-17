import Link from "next/link";
import { Grid, Box, Heading, Text } from "@radix-ui/themes";
import style from "../styles/account.module.css";

export default function Account() {
    return (
        <>




            {/* <h1 className={style.pageTitle}>Account2</h1> */}

            <div className={style.accountDiv}>


                <h3 className={style.accountContaintHeadingBborder}>MY ACCOUNT</h3>


                <div className={style.accountContaintDivForBorder}>
                    <div className={style.accountContaintDiv}>

                        <h3 className={style.accountContaintHeadingAborder}>MY ACCOUNT</h3>
                        <div className={style.infDiv}>


                            <div className={style.profileInfoDiv}>

                                <div className={style.profilePhotoDiv}>
                                    <img src="./images/UserProfilePic.png" alt="" />
                                </div>

                                <p>edit</p>

                            </div>


                            <div className={style.profileDataDiv}>

                                <div className={style.dataTableDiv}>





                                    <div className={style.dataTableDivLeft}>


                                        <p>Name</p>
                                        <p>Country</p>
                                        <p>Email</p>

                                    </div>

                                    <div className={style.dataTableDivRight}>

                                        <p>JULIA META</p>
                                        <p>USA</p>

                                        <p>JULIA@MAISONMETA.IO</p>
                                        <p>edit</p>



                                    </div>



                                </div>

                                <div className={style.socialLinkDiv}>

                                    <img src="./icons/Instagram.svg" alt="Instagram" />
                                    <img src="./icons/Facebook.svg" alt="Facebook" />
                                    <img src="./icons/Twitter.svg" alt="Twitter" />
                                    <img src="./icons/LinkedIn.svg" alt="LinkedIn" />

                                </div>

                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </>

    );
}