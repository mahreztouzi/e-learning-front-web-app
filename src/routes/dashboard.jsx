import React from "react";
import "../index.css";
import { connect } from "react-redux";
import Header from "../components/header";
import Sidebar from "../components/sidebar/sidebar";

import TopBanner from "../components/dashboard/topbanner";

const Dashboard = () => {
  return (
    <div>
      <Header />

      <div className="flex h-9/10">
        <Sidebar place="1" />
        {/* main content container */}
        <div className=" mt-auto w-4/5  h-screen p-10 bg-gray-100 ml-auto">
          <TopBanner />
          {/* middle section */}
          <div className="flex gap-4 items-stretch justify-between my-6">
            {/* <OutOfStockProducts amt="4" />
              <ProductsOnLowStock amt="4" />
              <ProductsToBeArrived amt="4" /> */}
          </div>
          {/* bottom graphs */}
          <div className="flex space-x-6">
            {/* <WeightedScore />
            <StockPercentage percentage="0.4" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
