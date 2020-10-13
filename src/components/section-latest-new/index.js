import React from "react";
import LeftSection from "components/section-latest-new/left-section";
import RightSection from "components/section-latest-new/right-section";

export default function SectionLatestNews() {
  return (
    <div className="block mt-8 lg:mx-auto xl:flex">
      <div className="w-full lg:mr-8 xl:w-2/3">
        <LeftSection />
      </div>
      <div className="w-full mt-4 xl:w-1/3 xl:mt-0">
        <RightSection />
      </div>
    </div>
  );
}
