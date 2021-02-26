import React from "react";
import Component1 from "../Component1";
import "./MacBook5.css";

function MacBook5(props) {
  const {
    macbook5,
    rectangle18,
    email,
    uwsRectangle,
    informMe,
    text2,
    frame19544655,
    text3,
    vector20,
    text1,
    stonkstache,
    group118,
    place,
    learn,
    spanText,
    spanText2,
    watch,
    discover,
    vector33,
    vector34,
    text5,
    mission,
    text6,
    text7,
    frame19544657,
    text10,
    spanText3,
    spanText4,
    sloganLineRight,
    sloganLineRight2,
    sloganLineRight3,
    sloganLineRight4,
    vector35,
    vector36,
    text11,
    termsConditions,
    text8,
    disclaimers,
    privacy,
    overlapGroup4,
    email2,
    overlapGroup7,
    join,
    vector23,
    address,
    component1Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="macbook-5 screen " style={{ backgroundImage: `url(${macbook5})` }}>
        <div className="auto-flex2">
          <div className="auto-flex1">
            <div className="overlap-group8">
              <div className="overlap-group1">
                <img className="rectangle-18" src={rectangle18} />
                <div className="email valign-text-middle coda-normal-monte-carlo-14px">{email}</div>
                <img className="uws-rectangle" src={uwsRectangle} />
                <div className="inform-me valign-text-middle coda-normal-monte-carlo-22px">{informMe}</div>
                <p className="text-2 valign-text-middle coda-normal-cruise-16px">{text2}</p>
                <div className="frame-19544655" style={{ backgroundImage: `url(${frame19544655})` }}></div>
                <div className="frame-100"></div>
                <div className="text-3 coda-normal-monte-carlo-20px">{text3}</div>
              </div>
              <div className="overlap-group5">
                <img className="vector-20" src={vector20} />
                <div className="text-1 valign-text-middle coda-normal-monte-carlo-22px">{text1}</div>
              </div>
              <div className="overlap-group6">
                <div className="stonk-stache coda-extra-bold-monte-carlo-20px">{stonkstache}</div>
                <img className="group-118" src={group118} />
              </div>
              <div className="overlap-group3">
                <div className="place coda-normal-monte-carlo-20px">{place}</div>
                <div className="learn coda-normal-monte-carlo-20px">{learn}</div>
              </div>
              <h1 className="text-4 coda-normal-monte-carlo-42px">
                <span className="span0-H8NcMo">{spanText}</span>
                <span className="span1-H8NcMo">{spanText2}</span>
              </h1>
            </div>
            <div className="overlap-group">
              <div className="watch coda-normal-monte-carlo-20px">{watch}</div>
              <div className="discover coda-normal-monte-carlo-20px">{discover}</div>
            </div>
          </div>
          <div className="overlap-group2">
            <img className="vector-33" src={vector33} />
            <img className="vector-34" src={vector34} />
            <div className="rectangle-22"></div>
            <div className="rectangle-23"></div>
            <p className="text-5 coda-normal-monte-carlo-16px">{text5}</p>
            <div className="mission coda-extra-bold-monte-carlo-28px">{mission}</div>
            <div className="text-6 coda-extra-bold-monte-carlo-20px">{text6}</div>
            <p className="text-7 coda-normal-monte-carlo-16px">{text7}</p>
            <div className="frame-19544660">
              <div className="auto-flex6">
                <div className="frame-19544657" style={{ backgroundImage: `url(${frame19544657})` }}></div>
                <div className="auto-flex4">
                  <div className="text-10 coda-extra-bold-monte-carlo-28px">{text10}</div>
                  <p className="text-9 coda-normal-monte-carlo-16px">
                    <span className="span02">{spanText3}</span>
                    <span className="span12">{spanText4}</span>
                  </p>
                </div>
              </div>
              <img className="slogan-line-right" src={sloganLineRight} />
            </div>
            <img className="slogan-line-right-1" src={sloganLineRight2} />
            <img className="slogan-line-right-2" src={sloganLineRight3} />
            <img className="slogan-line-right-3" src={sloganLineRight4} />
            <Component1
              learn={component1Props.learn}
              discover={component1Props.discover}
              watch={component1Props.watch}
            />
            <img className="vector-35" src={vector35} />
            <img className="vector-36" src={vector36} />
            <p className="text-11">{text11}</p>
          </div>
          <div className="auto-flex">
            <div className="terms-conditions coda-normal-monte-carlo-18px">{termsConditions}</div>
            <div className="text-8 coda-normal-monte-carlo-18px">{text8}</div>
          </div>
        </div>
        <div className="auto-flex5">
          <div className="auto-flex4-1">
            <div className="disclaimers coda-normal-monte-carlo-18px">{disclaimers}</div>
            <div className="privacy coda-normal-monte-carlo-18px">{privacy}</div>
          </div>
          <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
            <div className="email-1 coda-normal-monte-carlo-18px">{email2}</div>
            <div className="overlap-group7" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <div className="join coda-normal-monte-carlo-18px">{join}</div>
            </div>
          </div>
        </div>
        <div className="auto-flex3">
          <img className="vector-23" src={vector23} />
          <p className="address">{address}</p>
        </div>
      </div>
    </div>
  );
}

export default MacBook5;
