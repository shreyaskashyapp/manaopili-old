import "./TableStyles.css"; // Import external CSS for sticky-specific styling

const StickyTable = () => {
  return (
    <>
      <div className="flex gap-6 xl:flex-row  xs:flex-col">
        <div className="text-yellow-text text-[50px] leading-[55px] lg:pb-0 lg:min-w-[330px] xs:pb-12">
          Why choose us?
        </div>
        <div className="flex lg:w-full xs:max-w-[100vw] overflow-hidden ">
          <div className="flex flex-col w-full gap-3">
            <div
              className="table-wrapper overflow-y-hidden overflow-x-auto h-auto w-full border border-white"
              style={{ border: "1px solid" }}
            >
              <table className=" w-full service_sticky_table">
                <thead className="text-xs uppercase tracking-wide">
                  <tr className="sticky top-0 z-10 shadow-md">
                    <th className="sticky left-0 w-[287px]">
                      <div className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="46"
                          viewBox="0 0 48 46"
                          fill="none"
                          className="ManaopiliLogo"
                        >
                          <path
                            d="M25.3644 42.0497C22.2775 39.942 19.4949 39.6364 17.2599 41.0498C15.4662 42.1853 14.83 43.8822 15.4233 45.4796H0.655518C1.47288 45.3717 2.3013 45.1892 3.1477 44.925C9.28135 43.0123 13.884 37.4512 20.6386 37.7624C23.3479 37.8869 24.7393 39.068 25.3658 42.0497H25.3644Z"
                            fill="white"
                          />
                          <path
                            d="M47.5437 0.264893V37.7154C45.7984 38.0722 44.0572 38.4415 42.2883 38.6476C38.3854 39.0998 34.5683 38.8121 31.1039 36.7722C27.8414 34.8498 27.4666 30.9677 30.1883 28.34C31.9959 26.596 34.8076 26.1894 37.3108 27.2875C38.7713 27.9279 39.9621 28.9707 41.2939 29.8585C40.5789 27.7149 39.2567 26.0428 37.4146 24.8078C32.6045 21.584 27.5164 21.5812 22.3467 23.7526C17.8961 25.621 14.5299 29.0564 10.876 32.0506C7.5056 34.8125 3.99137 38.5978 0 40.8687V0.264893L23.7712 13.232L47.5423 0.264893H47.5437Z"
                            fill="white"
                          />
                          <path
                            opacity="0.2"
                            d="M41.2963 29.8571C41.2963 29.8571 33.0328 21.4387 24.6103 26.0925C16.1877 30.7477 6.93401 39.7234 0.000976562 40.8672C0.000976562 40.8672 10.924 28.4201 11.0899 28.3081C11.2559 28.1961 21.8954 21.0487 21.8954 21.0487C21.8954 21.0487 31.4257 19.1097 31.5931 19.1097C31.7604 19.1097 36.8015 20.9933 36.9675 21.0487C37.1334 21.104 38.9064 22.711 39.1844 23.3209C39.461 23.9309 42.6198 27.9762 42.7304 28.1974C42.8411 28.4187 42.3985 30.4697 42.3985 30.4697L41.2963 29.8557V29.8571Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                    </th>
                    <th className=" text-center font-[22px] leading-6">
                      MANA'O PILI
                    </th>
                    <th>
                      TRADITIONAL <br /> SERVICENOW <br /> PARTNERS
                    </th>
                    <th>
                      TRADITIONAL <br /> GSI's
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="sticky left-0 bg-gray-100 text-yellow-text text-center font-tahoma lg:leading-8 xs:leading-6 font-bold md:text-[25px] xs:text-[18px] align-middle">
                      SAVINGS
                    </td>
                    <td>
                      <div className="text-[22px] text-center  leading-6 font-normal">
                        Up to
                      </div>
                      <div className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                        70%
                      </div>
                    </td>
                    <td>
                      <div className="text-[22px] text-center  leading-6 font-normal">
                        Up to
                      </div>
                      <div className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                        30%
                      </div>
                    </td>
                    <td>
                      <div className="text-[22px] text-center  leading-6 font-normal">
                        Up to
                      </div>
                      <div className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                        70%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-gray-100 text-white text-center md:text-[25px] xs:text-[18px] font-tahoma lg:leading-8 xs:leading-6 font-bold">
                      EXPERIENCE LEVEL
                      <div className="text-white text-center font-tahoma md:text-[20px] xs:text-[14px] font-normal pt-1">
                        % of expert & experienced <br /> team members*
                      </div>
                    </td>
                    <td className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                      40%+
                    </td>
                    <td>
                      <div className="text-[22px] text-center  leading-6 font-normal">
                        Up to
                      </div>
                      <div className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                        25%
                      </div>
                    </td>
                    <td>
                      <div className="text-[22px] text-center  leading-6 font-normal">
                        Up to
                      </div>
                      <div className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                        10%
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-gray-100  text-white text-center md:text-[25px] xs:text-[18px] font-tahoma lg:leading-8 xs:leading-6 font-bold">
                      TECHNICAL <br />
                      EXPERTISE
                      <div className="text-white text-center font-tahoma md:text-[20px] xs:text-[14px] font-normal pt-1">
                        % of technical team <br /> members
                      </div>
                    </td>
                    <td>
                      <div className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                        75%
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center font-tahoma pt-4">
                        Just enough project <br /> management and focus <br />{" "}
                        on requirements. Focus <br /> on technical roles.
                      </div>
                    </td>
                    <td>
                      <div className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                        50%+
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center font-tahoma pt-4">
                        High percentage of <br /> project management & <br />{" "}
                        non-technical roles <br /> throughout the project,{" "}
                        <br /> trading off technical <br /> development time.
                      </div>
                    </td>
                    <td>
                      <div className="text-center md:text-[50px] xs:text-[40px]  leading-[55px]">
                        50%
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center font-tahoma pt-4">
                        Minimal project <br /> management and focus <br /> to
                        understand the <br />
                        customer. Overly <br /> focused with technical <br />{" "}
                        resources, resulting in <br />
                        too many “do overs”.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-gray-100 text-white text-center md:text-[25px] xs:text-[18px] font-tahoma lg:leading-8 xs:leading-6 font-bold">
                      CLIENT CENTRIC <br /> APPROACH
                    </td>
                    <td>
                      <div className="text-[26px] text-center  leading-7">
                        Balanced
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center font-tahoma pt-4">
                        Takes time to <br />
                        understand customer <br /> needs and provide <br />{" "}
                        balanced prescriptive <br /> guidance.
                      </div>
                    </td>
                    <td>
                      <div className="text-[26px] text-center  leading-7">
                        Overly <br /> Prescriptive
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center font-tahoma pt-4">
                        Can focus too much on <br /> verbose assessments <br />{" "}
                        and service offerings <br />
                        (i.e. accelerators) that <br /> often doesn’t align with{" "}
                        <br /> client use case.
                      </div>
                    </td>
                    <td>
                      <div className="text-[26px] text-center  leading-7">
                        Non-Prescriptive
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center  font-tahoma pt-4">
                        Been known to implement <br /> what customer asks for,{" "}
                        <br />
                        regardless of best practice
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-gray-100 text-white text-center md:text-[25px] xs:text-[18px] font-tahoma lg:leading-8 xs:leading-6 font-bold">
                      RISK FOR <br />
                      LICENSE UPSELL
                    </td>
                    <td>
                      <div className="text-[26px] text-center  leading-7">
                        Low
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center  font-tahoma pt-4">
                        Been known to implement <br /> what customer asks for,{" "}
                        <br />
                        regardless of best practice
                      </div>
                    </td>
                    <td>
                      <div className="text-[26px] text-center  leading-7">
                        Medium
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center  font-tahoma pt-4">
                        Recommend solutions <br /> using existing solution{" "}
                        <br /> set.Only recommend <br />
                        licensing when <br /> absolutely needed.
                      </div>
                    </td>
                    <td>
                      <div className="text-[26px] text-center  leading-7">
                        High
                      </div>
                      <div className="text-white md:text-[18px] xs:text-[14px] leading-normal text-center  font-tahoma pt-4">
                        Mandatory to maintain <br /> partner level.Financial{" "}
                        <br /> incentives by ServiceNow.
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex text-[14px] leading-normal text-white font-normal font-tahoma w-full ">
              *Expert and experienced team members is defined as ServiceNow
              certified technical resources with more than 3 years of
              implementation experience on the ServiceNow platform.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyTable;
