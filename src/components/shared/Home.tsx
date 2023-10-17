import Link from "next/link";
import {Grid, Box, Heading, Text} from "@radix-ui/themes";
import style from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={style.homepage}>
      {/* <!-- blackBackStart --> */}
      <div className={style.blackBack}>
        <div className={style.aifTextFirst}>
          <p>AI POWERED FASHION MODEL BY AI FASHION WEEK</p>
          <Link href={"/signup"}>
            <button>SIGN UP</button>
          </Link>
        </div>
        <div className={style.aifTextSecond}>
          <p>Ai</p>
          <p>FASHION</p>
          <p>WEEK</p>
        </div>

        <div className={style.headFirstImg}>
          <img src="./images/fashionIMG_1.png" alt="fashionIMG_1" />
        </div>
        <div className={style.headSecImg}>
          <img src="./images/fashionIMG_4.png" alt="fashionIMG_4" />
        </div>
      </div>
      {/* <!-- blackBackEnd --> */}



      {/* ----------------------------------------------------------------------------------------- */}

      <div className="nextSection">
        <div className={style.NextFirst}>
          <div className={style.NextFirstPara}>
            <p>POWERED BY AI FASHION WEEK</p>
          </div>

          {/* ------------------------------------------ */}

          <div className={style.NextFirstNext}>
            <div className={style.NextFirstLeft}>
              <div className={style.rectDiv}>
                <div className={style.divUnderRectDiv}>
                  <div className={style.iconDiv}>
                    <img src="./icons/blanckImgIcon.svg" alt="" />
                  </div>
                  <p>Click/tap here to add an image to use as a reference!</p>
                </div>
              </div>

              {/* --------------------------------------- */}

              <div className={style.NextFirstLeftOthers}>
                <div className={style.firstRect1}>
                  <div className={style.firstRect1Black}></div>

                  <span>57% - ETA 10s</span>
                </div>

                <h3>MODEL</h3>

                <div className={style.secRect1}>
                  <span>AI FASHION WEEK V1</span>
                  <div className={style.iconDiv}>
                    <img src="./icons/Arrow_1.svg" alt="" />
                  </div>
                </div>

                <p>
                  Create your AI collection with our custom AI model Fine-tuned
                  on over 20,000 copyrighted fashion images
                </p>
              </div>

              {/* --------------------------------------- */}
            </div>
            <div className={style.NextFirstRight}>
              {/* ------------------------------------------ */}

              <div className={style.NextFirstRightFirst}>
                <p>Aspect Ratio</p>

                <div className={style.NextFirstRightDivComb}>
                  <div className={style.verticalDiv}>
                    <div className={style.rectDiv2}></div>
                    <span>vertical</span>
                  </div>
                  <div className={style.squreDiv}>
                    <div className={style.rectDiv2}></div>
                    <span>squre</span>
                  </div>
                  <div className={style.rectangleDiv}>
                    <div className={style.rectDiv2}></div>
                    <span>rectangle</span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------ */}

              <div className={style.NextFirstRightSecond}>
                <div className={style.NextFirstRightSecondFirst}>
                  <input type="text" placeholder="Enter Prompt..." />
                  <button>Sign in to Generate</button>
                </div>

                <div className={style.NextFirstRightSecondsec}>
                  <p>Advance Options</p>
                  <div className={style.iconDiv}>
                    <img src="./icons/Polygon_1.svg" alt="" />
                  </div>
                </div>

                <div className={style.NextFirstRightSecondThird}>
                  <p>Negative Prompt</p>
                  <input
                    type="text"
                    placeholder="nsfw, worst quality, low quality, watermark, signature, simple background, blurry, cropped,  text, flat background"
                  />
                </div>
              </div>

              {/* ------------------------------------------ */}

              <div className={style.NextFirstRightThird}>
                <p>Guidance</p>
                <span className={style.textQueMark}>?</span>

                <div className={style.hrLindDiv}>
                  <div className={style.circlePosDiv}>
                    <span className={style.text7Num}>7</span>
                    <span className={style.circle}></span>
                  </div>
                </div>
              </div>

              <div className={style.NextFirstRightFourth}>
                <p>Seed</p>
                <span className={style.textQueMark}>?</span>
                <div className={style.secRect1}>
                  <span>-1</span>
                </div>
              </div>

              <div className={style.NextFirstRightFifth}>
                <p>REFINER </p>
                <span className={style.textQueMark}>?</span>

                <div className={style.hrLindDiv}>
                  <div className={style.circlePosDiv}>
                    <span className={style.text80Per}>80%</span>
                    <span className={style.circle}></span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------ */}
            </div>

            {/* ------------------------------------------ */}
          </div>

          {/* ------------------------------------------ */}
        </div>

        {/* ------------------------------------------ */}

        <div className={style.NextSecond}>
         <Heading as="h2" className={style.textHeadingGen}>My Generations</Heading>
          <hr />
          <div className={style.imgDiv}>
            <div className={style.imgDiv1}>
              <img src="./images/fashionIMG_2.png" alt="" />
            </div>
            <div className={style.imgDiv2}>
              <img src="./images/fashionIMG_6.png" alt="" />
            </div>
            <div className={style.imgDiv3}>
              <img src="./images/fashionIMG_3.png" alt="" />
            </div>
            <div className={style.imgDiv4}>
              <img src="./images/fashionIMG_5.png" alt="" />
            </div>
          </div>

          <hr />

          {/* textDivStart */}

          <Grid columns="2" gap="2" width="auto" className={style.infoSection}>
            <Box height="max-content">
            <Heading as="h1" className={style.textHeading}>The Competition</Heading>
            <Text as="p" className={style.textContent}>
                Lorem ipsum dolor sit amet consectetur. Morbi vulputate aliquet
                non sed volutpat. Nibh integer congue tortor proin. Massa dui et
                feugiat aliquam id neque. Tincidunt purus neque arcu feugiat
                augue. Ut elit nisl tincidunt diam dui congue lobortis.
                Vestibulum parturient ridiculus ac sit placerat quis dui congue.
                Venenatis ornare nunc sit quam maecenas. Odio lorem feugiat
                lorem imperdiet commodo morbi ut congue. Purus dis nec euismod
                feugiat nulla viverra vel at. Non ut lectus tortor augue aliquam
                auctor nullam odio urna. Pellentesque malesuada iaculis ac massa
                in cras ultrices orci.
            </Text>
            </Box>
            <Box height="9">
            <Heading as="h1" className={style.textHeading}>PRIZE</Heading>
            <Text as="p" className={style.textContent}>
                Lorem ipsum dolor sit amet consectetur. Morbi vulputate aliquet
                non sed volutpat. Nibh integer congue tortor proin. Massa dui et
                feugiat aliquam id neque. Tincidunt purus neque arcu feugiat
                augue. Ut elit nisl tincidunt diam dui congue lobortis.
                Vestibulum parturient ridiculus ac sit placerat quis dui congue.
                Venenatis ornare nunc sit quam maecenas. Odio lorem feugiat
                lorem imperdiet commodo morbi ut congue. Purus dis nec euismod
                feugiat nulla viverra vel at. Non ut lectus tortor augue aliquam
                auctor nullam odio urna. Pellentesque malesuada iaculis ac massa
                in cras ultrices orci.
            </Text>
            </Box>
            <Box height="9">
            <Heading as="h1" className={style.textHeading}>About AIFW</Heading>
            <Text as="p" className={style.textContent}>
                Lorem ipsum dolor sit amet consectetur. Morbi vulputate aliquet
                non sed volutpat. Nibh integer congue tortor proin. Massa dui et
                feugiat aliquam id neque. Tincidunt purus neque arcu feugiat
                augue. Ut elit nisl tincidunt diam dui congue lobortis.
                Vestibulum parturient ridiculus ac sit placerat quis dui congue.
                Venenatis ornare nunc sit quam maecenas. Odio lorem feugiat
                lorem imperdiet commodo morbi ut congue. Purus dis nec euismod
                feugiat nulla viverra vel at. Non ut lectus tortor augue aliquam
                auctor nullam odio urna. Pellentesque malesuada iaculis ac massa
                in cras ultrices orci.
            </Text>
            </Box>
            <Box height="9">
            <Heading as="h1" className={style.textHeading}>ABOUT MAISON META</Heading>
            <Text as="p" className={style.textContent}>
                Lorem ipsum dolor sit amet consectetur. Morbi vulputate aliquet
                non sed volutpat. Nibh integer congue tortor proin. Massa dui et
                feugiat aliquam id neque. Tincidunt purus neque arcu feugiat
                augue. Ut elit nisl tincidunt diam dui congue lobortis.
                Vestibulum parturient ridiculus ac sit placerat quis dui congue.
                Venenatis ornare nunc sit quam maecenas. Odio lorem feugiat
                lorem imperdiet commodo morbi ut congue. Purus dis nec euismod
                feugiat nulla viverra vel at. Non ut lectus tortor augue aliquam
                auctor nullam odio urna. Pellentesque malesuada iaculis ac massa
                in cras ultrices orci.
            </Text>
            </Box>
          </Grid>

          <div className={style.textDiv}>
            <div className={style.text1div}>
             </div>
          </div>

          {/* textDivEnd */}

          <hr />

          <div className={style.NextThird}>
            <Heading as="h2" className={style.textHeading}>EXAMPLES</Heading>
            <Heading as="h1" className={style.textHeadingTwo}>INSPIRATIONS OF WHAT YOU CAN CREATE</Heading>
            <Text as="p" className={style.textContent}>
              Lorem ipsum dolor sit amet consectetur. Morbi vulputate aliquet
              non sed volutpat.{" "}
            </Text>

            <div className={style.imgDiv}>
              <div className={style.imgDiv1}>
                <img src="./images/fashionIMG_2.png" alt="" />
              </div>
              <div className={style.imgDiv2}>
                <img src="./images/fashionIMG_6.png" alt="" />
              </div>
              <div className={style.imgDiv3}>
                <img src="./images/fashionIMG_3.png" alt="" />
              </div>
              <div className={style.imgDiv4}>
                <img src="./images/fashionIMG_5.png" alt="" />
              </div>
            </div>
          </div>
          {/* ------------------------ */}
          <div className={style.NextFourth}></div>
          {/* ------------------------ */}
        </div>
      </div>
    </div>
  );
}
