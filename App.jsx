import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MacBook5 from "./components/MacBook5";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|macbook-5)">
          <MacBook5 {...MacBook5Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const component1Data = {
    learn: "Learn",
    discover: "Discover",
    watch: "Watch",
};

const MacBook5Data = {
    macbook5: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/macbook---5@1x.png",
    rectangle18: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/rectangle-18@1x.png",
    email: "Email...",
    uwsRectangle: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/uws-rectangle-1@2x.svg",
    informMe: "Inform me!",
    text2: "Our mission is to help YOU use the free investing resources of today to your benefit rather than your detrimate.",
    frame19544655: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/frame-19544655@2x.svg",
    text3: "The only tool you need to become a successful stock market investor.",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/vector-20@2x.svg",
    text1: "Desktop and Mobile Website Coming April 2021",
    stonkstache: "StonkStache",
    group118: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/group-118-1@2x.svg",
    place: "Mission",
    learn: "Learn",
    spanText: "Welcome to ",
    spanText2: "StonkStache",
    watch: "Watch",
    discover: "Discover",
    vector33: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/vector-33@1x.svg",
    vector34: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/vector-33@1x.svg",
    text5: "        Investing in the stock market has been localized with free platforms like Robinhood and WeBull therefore, this advancement removed any barrier of entry into the stockmarket “no matter how much experience you have (or don’t have)” (Robinhood). This may sound idealistic however, we emphasize the economic principle of intentions versus effects. A staggering 90% of hopeful and seasoned investors lose money in the stock market; these apps removing any barrier to entry have only exacerbated that statistic. Investing is no get rich quick scheme but can ensure a prosperous future if approached with the correct mindset and strategy. Investing in the stock market is not hard; like most things, it entails a learning curve. Stonkstache is here to walk you through the learning curve and serve as your educational tool to understanding the principles and mindset of successful investors.",
    mission: "Mission:",
    text6: "When You Make it Over the Learning Curve: Delete Us!",
    text7: " Or hold on to this tool for its no-nonsense display of volatility and balance sheets and to reinforce the basic but nonetheless essential pillars to successful long-term investing.",
    frame19544657: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/frame-19544657@2x.svg",
    text10: "A Proper Introduction to the Market",
    spanText3: " ",
    spanText4: "We are here to walk you through everything from index funds to the mindset needed to be a successful investor.",
    sloganLineRight: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/slogan-line-right@1x.svg",
    sloganLineRight2: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/slogan-line-right-1@1x.svg",
    sloganLineRight3: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/slogan-line-right-2@1x.svg",
    sloganLineRight4: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/slogan-line-right-3@1x.svg",
    vector35: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/vector-35@2x.svg",
    vector36: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/vector-36@2x.svg",
    text11: "Stonkstache is for information and educational purposes only. It is not intended to be an investment advice. Please consider the risk involved and your personal financial situation before investing or seek a duly licensed professional for investment advice.",
    termsConditions: "Terms & Conditions",
    text8: "Join our monthly newsletter for early access to any information regarding the launch!",
    disclaimers: "Disclaimers",
    privacy: "Privacy",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/rectangle-20@2x.svg",
    email2: "Email...",
    overlapGroup7: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/rectangle-21@2x.svg",
    join: "Join!",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/60394da0b8d88bc8b6871dbb/releases/60394e3d82d1eee503ec0d6a/img/vector-23@2x.svg",
    address: "2021 Stonkstache. All Rights Reserved.",
    component1Props: component1Data,
};

