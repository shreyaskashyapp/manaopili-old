import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './TrpDigital.css';
import useWindowSize from '../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';

const TechnologyTrpSurveyForm = () => {
  const { width } = useWindowSize();
  const [selections, setSelections] = useState({});
  const [showPopup, setShowPopup] = useState(false); // Toggle for popup
  const [popupMessage, setPopupMessage] = useState(''); // Message to display in popup
  const [popupContent, setPopupContent] = useState(''); // Message to display in popup
  const [popupType, setPopupType] = useState('success'); // Type of popup (success/error)
  const [loading, setLoading] = useState(false); // Loading state for the submit button
  const location = useLocation();
  const totalSections = 22; // Total number of sections
  const [completedSections, setCompletedSections] = useState(0); // Progress state
  const progressPercentage = (completedSections / totalSections) * 100;
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0); // To track the current module
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0); // Add this state
  const [ popupOrganization, setPopupOrganization]=useState('')
  const navigate = useNavigate();


  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');
  const OrganizationName = queryParams.get('organization');

  const data = [
    {
      category: 'STANDARD ITSM MODULES',
      modules: [
        'Incident Management',
        'Problem Management',
        'Change Management',
        'Release Management',
        'Cost Management',
        'Asset Management',
        'Request Management',
        'Walk-Up Experience',
        'Digital Portfolio Management',
        'Universal Request', // This module will have bottom border
      ],
    },
    {
      category: 'PROFESSIONAL ITSM MODULES',
      modules: [
        'Performance Analytics',
        'Digital Product Release',
        'Virtual Agent',
        'Predictive Intelligence',
        'Continual Improvement',
        'Vendor Manager Workspace',
        'Mobile Publishing',
        'DevOps Change Velocity',
        'DevOps Config', // This module will have bottom border
      ],
    },
    {
      category: 'ENTERPRISE',
      modules: ['Workspace Optimization', 'Process Mining', 'App Engine Starter'],
    },
  ];

  const handleBubbleClick = (module, column, value) => {
    // Update selections first
    setSelections((prevSelections) => {
      const updatedSelections = {
        ...prevSelections,
        [module]: {
          ...prevSelections[module],
          [column]: value,
        },
      };
  
      return updatedSelections;
    });
  
    // Check if all columns for the module are selected (People, Process, Technology)
    const moduleSelected = ['People', 'Process', 'Technology'].every((col) => {
      return {
        ...selections[module],
        [column]: value,
      }[col] !== undefined; // Check against the updated selections
    });
  
    // If all columns are selected, move to the next module
    if (moduleSelected) {
      setTimeout(()=>{
      // If it's not the last module in the current category, move to the next module
      if (currentModuleIndex < data[currentCategoryIndex].modules.length - 1) {
        setCurrentModuleIndex((prevIndex) => prevIndex + 1); // Move to the next module within the same category
      } else {
        // If it's the last module in the current category, move to the next category
        if (currentCategoryIndex < data.length - 1) {
          setCurrentCategoryIndex(currentCategoryIndex + 1); // Move to the next category
          setCurrentModuleIndex(0); // Reset to the first module in the new category
        }
      }
      handleCompleteSection(); // Update progress
    },500)
    }
  
    console.log(`Email: ${email}, Organization: ${OrganizationName}, Module: ${module}, Column: ${column}, Selected Value: ${value}`);
  };


  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      // Move to the previous module
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCompletedSections((prev) => Math.max(prev - 1, 0)); // Decrease progress when moving back
    } else if (currentCategoryIndex > 0) {
      // Move to the previous category and its last module
      setCurrentCategoryIndex(currentCategoryIndex - 1);
      setCurrentModuleIndex(data[currentCategoryIndex - 1].modules.length - 1);
      setCompletedSections((prev) => Math.max(prev - 1, 0)); // Decrease progress when moving back
    }
  };
  





  const handleSubmit = async () => {
    setLoading(true);
    const formData = {
      OrganizationName,
      email,
      people: {
        standard: data[0].modules.map((module) => selections[module]?.People || 0),
        professional: data[1].modules.map((module) => selections[module]?.People || 0),
        enterprise: data[2].modules.map((module) => selections[module]?.People || 0),
      },
      process: {
        standard: data[0].modules.map((module) => selections[module]?.Process || 0),
        professional: data[1].modules.map((module) => selections[module]?.Process || 0),
        enterprise: data[2].modules.map((module) => selections[module]?.Process || 0),
      },
      technology: {
        standard: data[0].modules.map((module) => selections[module]?.Technology || 0),
        professional: data[1].modules.map((module) => selections[module]?.Technology || 0),
        enterprise: data[2].modules.map((module) => selections[module]?.Technology || 0),
      },
    };

    try {
      const response = await fetch('https://pdf-app12-latest.onrender.com/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setPopupMessage('Form submitted successfully!');
        setPopupMessage('IT Service Management Report made for');
        setPopupOrganization(`  ${OrganizationName}`);
        setPopupContent(`Thank you for considering Mana’o Pili.Your survey results will be sent to your email within 48 hours.`);
        setPopupType('success');
      } else {
        setPopupMessage('Failed to submit form.');
        setPopupType('error');
      }
      setSelections({});
    } catch (error) {
      setPopupMessage('Error submitting form.');
      setPopupType('error');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false); // Reset loading state after the form submission attempt
      setShowPopup(true); // Show the popup after handling response
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/survey');
  };

  const getBorderClass = (module) => {
    if (module === 'Universal Request' || module === 'DevOps Config') {
      return 'border-b border-white pb-4';
    }
    if (module === 'App Engine Starter') {
      return 'pb-[50px]';
    }
    if (module === 'Workspace Optimization') {
      return 'pt-[44px]';
    }
    return '';
  };
  const handleCompleteSection = () => {
    setCompletedSections((prev) => Math.min(prev + 1, totalSections)); // Ensure progress doesn't exceed 100%
  };

  return (
    <div>
      {width < 1024 ? (
        <div className="mobile-survey-layout border">
          <div className="header">
            <h1 className="main-title text-center border-b font-tahoma text-[24px] leading-[60px] font-normal">{data[currentCategoryIndex].category}</h1>
            <h2 className="sub-title text-center border-b font-tahoma text-[24px] leading-[60px] font-normal">{data[currentCategoryIndex].modules[currentModuleIndex]}</h2>
            <h2 className="sub-title text-center border-b tracking-[10px] font-tahoma text-[24px] leading-[60px] font-normal">0 1 2 3 4 5</h2>
          </div>

          {/* Progress Bar */}


          {/* Rows (People, Process, Tech) */}
          <div className="survey-sections">
            {["People", "Process", "Technology"].map((section, i) => (
              <div key={i} className="survey-row">
                <h3 className="section-title text-center">{section}</h3>
                <div className="bubbles">
                  {[0, 1, 2, 3, 4, 5].map((bubble) => (
                    <div
                    key={bubble}
                    onClick={() => handleBubbleClick(data[currentCategoryIndex].modules[currentModuleIndex], section, bubble)}
                    className={`bubble w-8 h-8 ${selections[data[currentCategoryIndex].modules[currentModuleIndex]]?.[section] === bubble ? 'selected' : ''}`}
                    style={{
                      backgroundColor: selections[data[currentCategoryIndex].modules[currentModuleIndex]]?.[section] === bubble ? '#DEFF00' : '#5B5B5B',
                    }}
                  ></div>

                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-around py-8">
          <button
              type="button"
              onClick={handlePrev}
              disabled={currentCategoryIndex === 0 && currentModuleIndex === 0}
              className="bg-white text-black py-3 px-6 rounded-full w-[30%] font-tahoma"
            >
              {/* Display Next for all modules except the last one in the last category */}
              Prev
            </button>
            
            <button
              type="button"
              onClick={() => {
                // Check if we're on the last module in the current category
                if (currentModuleIndex < data[currentCategoryIndex].modules.length - 1) {
                  setCurrentModuleIndex(currentModuleIndex + 1); // Move to the next module
                } else {
                  // If it's the last module in the current category
                  if (currentCategoryIndex < data.length - 1) {
                    // Move to the next category and reset to the first module
                    setCurrentCategoryIndex(currentCategoryIndex + 1);
                    setCurrentModuleIndex(0);
                  } else {
                    // If it's the last module in the last category, submit the form
                    handleSubmit(); // Call submit function
                  }
                }

                // Update the section completion
                handleCompleteSection();
              }}
              className="bg-white text-black py-3 px-6 rounded-full w-[30%] font-tahoma"
            >
              {/* Display Next for all modules except the last one in the last category */}
              {currentCategoryIndex === data.length - 1 && currentModuleIndex === data[data.length - 1].modules.length - 1
                ? 'Submit'
                : `Next `}
            </button>
            
          </div>
          <div className="progress-bar-container">
            {Array.from({ length: totalSections }).map((_, index) => (
              <div
                key={index}
                className={`progress-segment ${index < completedSections ? "completed" : ""}`}
              ></div>
            ))}
          </div>
        </div>

      ) : (
        <div className="p-6 text-white">
          <div className="text-[26px] font-tahoma font-normal">
            For each module, click on the response. Complete scores for the modules you have implemented. Modules with no score will default to a score of 0.
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-white w-full Digital_TRp_survey">
              <thead>
                <tr>
                  <th className="border border-white p-4" rowSpan={2}></th>
                  <th className="border border-white p-4"></th>
                  <th className="border border-white px-[65px] py-4 text-center text-[28px] font-tahoma font-normal ">
                    PEOPLE
                  </th>
                  <th className="border border-white px-[50px] py-[7px] text-center text-[26px] font-tahoma font-normal ">
                    PROCESS
                  </th>
                  <th className="border border-white px-[23px] py-[7px] text-center text-[26px] font-tahoma font-normal">
                    TECHNOLOGY
                  </th>
                </tr>
                <tr>
                  <th className="border border-white p-4"></th>
                  <th className="border border-white pt-[26px] pb-[14px] text-center text-[30px] font-normal tracking-[2px]  khula-regular">
                    0 1 2 3 4 5
                  </th>
                  <th className="border border-white pt-[26px] pb-[14px] text-center text-[30px] font-normal tracking-[2px] khula-regular">
                    0 1 2 3 4 5
                  </th>
                  <th className="border border-white pt-[26px] pb-[14px] text-center text-[30px] font-normal tracking-[2px] khula-regular">
                    0 1 2 3 4 5
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((section, sectionIndex) => (
                  <React.Fragment key={sectionIndex}>
                    {section.modules.map((module, moduleIndex) => (
                      <tr key={moduleIndex}>
                        {moduleIndex === 0 && (
                          <td
                            className="border border-white text-center align-middle"
                            rowSpan={section.modules.length}
                            style={{
                              writingMode: 'vertical-rl',
                              letterSpacing: '1.5px',
                              transform: 'rotate(180deg)',
                              fontSize: '26px',
                              lineHeight: '60px',
                              color: '#fff',
                              fontFamily: 'Tahoma',
                              width: '60px',
                            }}
                          >
                            {section.category}
                          </td>
                        )}
                        <td
                          className={`pt-[17px] pl-[31px] text-[26px] font-tahoma text-left ${getBorderClass(
                            module
                          )}`}
                        >
                          {module}
                        </td>
                        {['People', 'Process', 'Technology'].map((column) => (
                          <td
                            key={column}
                            className={`border-l border-white pt-7 ${getBorderClass(module)}`}
                          >
                            <div className="flex justify-center gap-2">
                              {[0, 1, 2, 3, 4, 5].map((value) => (
                                <div
                                  key={value}
                                  onClick={() => handleBubbleClick(module, column, value)}
                                  className={`w-5 h-5 rounded-full border-2  ${selections[module]?.[column] === value
                                    ? 'bg-yellow-text'
                                    : 'bg-[#5B5B5B]'
                                    } cursor-pointer`}
                                ></div>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-[70px]">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-white text-black tracking-[1.5px] text-[30px] leading-9 py-[10px] px-11 hover:bg-[#DEFF00] transition duration-300 ease-in-out sm:w-[392px] xs:w-[250px] rounded-full uppercase"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>

         
        </div>
      )}
       {/* Custom Popup */}
       {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div
                className={`relative p-6 border-2 lg:min-w-[1000px] lg:min-h-[600px] ${popupType === 'success' ? 'bg-[#000]' : 'bg-[#000]'
                  }`}
              >
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 text-white lg:text-[60px] text-[30px] font-semibold hover:text-yellow-text"
                  aria-label="Close Popup"
                >
                  &times;
                </button>

                <h2 className="text-2xl font-bold text-white mb-4 text-center">
                  {popupType === 'success' ? 'Success' : 'Error'}
                </h2>
                <p className="text-[34px] leading-[37px] font-normal text-body-text text-center">{popupMessage}</p>
                <p className="text-[34px] leading-[37px] font-normal text-yellow-text text-center pt-3">{popupOrganization}</p>
                <div className='flex justify-center'>
                  <p className=" leading-[1.2] font-normal italic text-yellow-text text-center lg:max-w-[837px] lg:pt-[100px] lg:px-[114px] lg:text-[50px] text-[24px] pt-8">{popupContent}</p>
                </div>

                <div className="flex justify-center pt-[50px]">
                  <button
                    onClick={closePopup}
                    className=" text-white px-6 py-2 underline hover:text-yellow-text lg:text-[40px] text-[24px] leading-normal"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          )}
    </div>
  );

};

export default TechnologyTrpSurveyForm;
