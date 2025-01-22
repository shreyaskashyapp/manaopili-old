import React from 'react'
import ArrowDownIcon from './Svgs/ArrowDownIcon'
import useWindowSize from '../hooks/useWindowSize';

const DigitalTrpInstruction = () => {
    const { width } = useWindowSize();
    return (

        <>
            <div className="flex gap-3 items-center">
                <div className='text-[50px] leading-[55px] text-body-text font-normal'>Ready to take our Digital TRiP survey? </div><ArrowDownIcon />
            </div>
            <div className='text-[26px] text-white font-tahoma leading-normal'>Use the following scoring system to fill out separate rankings for each module by people, process, and technology:</div>
            {width < 1024 ? (
                
                <>
                    <div className='flex fle-row gap-12 sm:justify-center'>
                        <div className="flex flex-col text-center xl:min-w-[203px]">
                            <div className='text-[40px] text-yellow-text'>0</div>
                            <div className='text-[22px] text-white leading-[1.2] font-tahoma'>Not <br /> Implemented</div>
                            
                        </div>
                        <div className="flex flex-col text-center xl:min-w-[203px]">
                            <div className='text-[40px] text-yellow-text'>1</div>
                            <div className='text-[22px] text-white leading-[1.2] font-tahoma'>MVP <br /> Implementation</div>
                            
                        </div>
                    </div>
                    <div className='flex flex-row gap-[3.75rem] pt-[64px] sm:justify-center'>
                        <div className="flex flex-col text-center xl:min-w-[203px]">
                            <div className='text-[40px] text-yellow-text'>2</div>
                            <div className='text-[22px] text-white leading-[1.2] font-tahoma'>Partially <br /> Implemented</div>
                            
                        </div>
                        <div className="flex flex-col text-center xl:min-w-[203px]">
                            <div className='text-[40px] text-yellow-text'>3</div>
                            <div className='text-[22px] text-white leading-[1.2] font-tahoma'>Fully <br /> Implemented</div>
                            
                        </div>
                    </div>
                    <div className='flex fle-row gap-12 pt-[64px] sm:justify-center'>
                        <div className="flex flex-col text-center xl:min-w-[203px]">
                            <div className='text-[40px] text-yellow-text'>4</div>
                            <div className='text-[22px] text-white leading-[1.2] font-tahoma'>Proactive <br /> Process  <br /> Improvements</div>
                            
                        </div>
                        <div className="flex flex-col text-center xl:min-w-[203px]">
                            <div className='text-[40px] text-yellow-text'>5</div>
                            <div className='text-[22px] text-white leading-[1.2] font-tahoma'>Automated or <br /> AI  Driven <br /> Improvements</div>
                            
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-row gap-3  w-full pt-[54px]">
                    <div className="flex flex-col text-center xl:min-w-[203px]">
                        <div className='text-[50px] text-yellow-text'>0</div>
                        <div className='text-[26px] text-white leading-[1.2] font-tahoma'>Not <br /> Implemented</div>
                        
                    </div>
                    <div className="flex flex-col text-center xl:min-w-[203px]">
                        <div className='text-[50px] text-yellow-text'>1</div>
                        <div className='text-[26px] text-white leading-[1.2] font-tahoma'>MVP <br /> Implementation</div>
                        
                    </div>
                    <div className="flex flex-col text-center xl:min-w-[203px]">
                        <div className='text-[50px] text-yellow-text'>2</div>
                        <div className='text-[26px] text-white leading-[1.2] font-tahoma'>Partially <br /> Implemented</div>
                        
                    </div>
                    <div className="flex flex-col text-center xl:min-w-[203px]">
                        <div className='text-[50px] text-yellow-text'>3</div>
                        <div className='text-[26px] text-white leading-[1.2] font-tahoma'>Fully <br /> Implemented</div>
                        
                    </div>
                    <div className="flex flex-col text-center xl:min-w-[203px]">
                        <div className='text-[50px] text-yellow-text'>4</div>
                        <div className='text-[26px] text-white leading-[1.2] font-tahoma'>Proactive Process  <br /> Improvements</div>
                        
                    </div>
                    <div className="flex flex-col text-center xl:min-w-[203px]">
                        <div className='text-[50px] text-yellow-text'>5</div>
                        <div className='text-[26px] text-white leading-[1.2] font-tahoma'>Automated or AI <br /> Driven <br /> Improvements</div>
                        
                    </div>
                </div>
            )}

        </>

    )
}

export default DigitalTrpInstruction