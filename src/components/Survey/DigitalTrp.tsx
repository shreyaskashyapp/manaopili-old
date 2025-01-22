import React from 'react';
import { useForm } from 'react-hook-form';
import ArrowDownIcon from '../Svgs/ArrowDownIcon';
import { useNavigate } from 'react-router-dom';

interface FormData {
    email: string;
    OrganizationName:string,
}

const DigitalTrp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        console.log('Form Data:', data);
        const { email, OrganizationName } = data;
        navigate(`/Technology-digitalTrpForm?email=${encodeURIComponent(email)}&organization=${encodeURIComponent(OrganizationName)}`);
    };

    return (
        <>
            <div className="flex lg:gap-40 items-center">
                <div className='text-[50px] leading-[55px] text-body-text font-normal'>Ready to take our Digital TRiP survey? </div>
                <ArrowDownIcon />
            </div>

            <div className='text-[26px] text-white font-tahoma leading-normal'>Fill out your email address to access our survey.</div>
            <div className='lg:flex justify-center pt-16 pb-36'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <input
                            type="email"
                            placeholder="Email Address*"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                            className={`mt-6 border bg-transparent p-5 lg:w-[905px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.email ? "border-yellow-text" : ""}`}
                        />
                        {errors.email && <span className="text-yellow-text p-5 text-[16px]">{errors.email.message}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type="text"
                            placeholder="Organization Name*"
                            {...register('OrganizationName', {
                                required: 'Organization Name is required',
                                
                            })}
                            className={`mt-6 border bg-transparent p-5 lg:w-[905px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.email ? "border-yellow-text" : ""}`}
                        />
                        {errors.OrganizationName && <span className="text-yellow-text p-5 text-[16px]">{errors.OrganizationName.message}</span>}
                    </div>
                    <div className="flex justify-center mt-[70px]">
                        <button
                            type="submit"
                            className="bg-white text-black tracking-[1.5px] text-[30px] leading-9 py-[10px] px-11 hover:bg-[#DEFF00] transition duration-300 ease-in-out sm:w-[392px] xs:w-[250px] sm:justify-start xs:justify-center h-[62px] rounded-full"
                        >
                            NEXT
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default DigitalTrp;
