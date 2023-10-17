import React from "react";
import styles from "../styles/footer.module.css";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <img className={styles.aifwIcon} alt="" src="./images/AIFW1.png" />
        <div
          className={styles.privacyPolicy}
        >{`Privacy Policy  |   Terms & Conditions  |  Contact `}</div>
      </div>
      <div className={styles.followUs}>
        <div className={styles.followText}>FOLLOW US</div>
        <div className={styles.appSocials}>
          <img
            className={styles.instagramIcon}
            alt=""
            src="./images/Instagram.png"
          />
          <img className={styles.discordIcon} alt="" src="./images/Discord.png" />
        </div>
      </div>
      <div className={styles.poweredBy}>
        <div className={styles.nvidia1Parent}>
          <div className={styles.poweredBy}>{`Powered by `}</div>
          <img className={styles.nvidia1Icon} alt="" src="./images/NVIDIA.png" />
        </div>
        <div className={styles.createdByParent}>
          <div className={styles.createdBy}>{`Created by `}</div>
          <img className={styles.vectorIcon} alt="" src="./images/Vector.png" />
        </div>
      </div>
    </div>
  );
};
