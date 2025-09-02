import React from "react";

const WINNINGS = [
  {
    title: "#1",
    description: "top leader in worlwide SaaS industry",
  },
  {
    title: "12",
    description: "years of experience in the business",
  },
  {
    title: "14",
    description: "top leader in worlwide SaaS industry",
  },
  {
    title: "4.9/5",
    description: "average rating review score",
  },
];

const AwardWinning = () => {
  return (
    <section id="award-winning">
      <div className="wrapper border border-solid border-[#FF6F40] p-[50px] rounded-2xl flex items-center gap-10">
        <div className="left w-1/2">
          <h2 className="text-[58px] font-poppins font-semibold leading-[1.1] mb-6">
            An award-winning media intelligence solution
          </h2>
          <p className="text-[19px]">
            Confirmed as a high-performing product by customers and tech experts
            in various industries.
          </p>
        </div>
        <div className="w-1/2">
          <ul className="winnings flex items-center flex-wrap gap-4">
            {WINNINGS.map((winning, i) => (
              <li key={i} className="winning w-[45%]">
                <span className="title text-[48px] font-poppins font-semibold text-[#FF6F40] block mb-2">
                  {winning.title}
                </span>
                <span className="description text-[16px]">
                  {winning.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AwardWinning;
