import React from 'react'
import style from "./cardHorizontal.module.css";
import Image from 'next/image';
import Card1 from "@/public/images/card1.png";
import Bed from "@/public/images/BiBed.png";
import Bath from "@/public/images/BiBath.png";
import Heart from "@/public/icons/BiHeart.png";
import Share from "@/public/icons/BiShareAlt.png";
import Agent from "@/public/icons/logo-agent card.png";
import BorderOuter from "@/public/images/BiBorderOuter.png";

const CardHorizontal = () => {
  return (
    <div className={style.card_container}>
      <div className={style.card_image}>
        <Image alt='image' src={Card1} fill style={{objectFit: "cover"}}/>
      </div>
      <div className={style.card_inline_container}>
        <div className={style.text_container}>
          <div className={style.price_container}>
            <h2 className={style.h2}>$1,200,000</h2>
            <h3 className={style.h3}>$15,200 за м²</h3>
          </div>
          <div className={style.info_container}>
            <div className={style.icons_container}>
              <div className={style.icon_container}>
                <div className={style.text_icon}>
                  <Image alt='icon' src={Bed} fill style={{objectFit: "cover"}}/>
                </div>
                <h4 className={style.count}>2</h4>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="21" viewBox="0 0 2 21" fill="none">
                <line x1="1.04785" y1="0.5" x2="1.04785" y2="20.5" stroke="#718096" strokeOpacity="0.36"/>
              </svg>

              <div className={style.icon_container}>
                <div className={style.text_icon}>
                  <Image alt='icon' src={Bath} fill style={{objectFit: "cover"}}/>
                </div>
                <h4 className={style.count}>2</h4>
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="21" viewBox="0 0 2 21" fill="none">
                <line x1="1.04785" y1="0.5" x2="1.04785" y2="20.5" stroke="#718096" strokeOpacity="0.36"/>
              </svg>

              <div className={style.icon_container}>
                <div className={style.text_icon}>
                  <Image alt='icon' src={BorderOuter} fill style={{objectFit: "cover"}}/>
                </div>
                <h4 className={style.count}>2038 м2</h4>
              </div>
            </div>
            <p className={style.p}>3/6 этаж  |  Вид на горы</p>
          </div>
        </div>
        
        <div className={style.card_icon_container}>
          <div className={style.card_icon_inline_container}>
            <div className={style.card_icon}>
              <Image alt='image' src={Heart} fill style={{objectFit: "cover"}}/>
            </div>
          </div>

          <div className={style.card_icon_inline_container}>
            <div className={style.card_icon}>
              <Image alt='image' src={Share} fill style={{objectFit: "cover"}}/>
            </div>
          </div>
          
          <div className={style.card_icon_inline_container}>
            <div className={style.card_avatar}>
              <Image alt='image' src={Agent} fill style={{objectFit: "contain"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHorizontal