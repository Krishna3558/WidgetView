import React, { useState } from 'react'
import './style.css'

function Tabs() {
    const [ tab , setTab ] = useState('');
    const [para , setPara] = useState("Hello! I’m Dave, your sales rep here from Salesforce. Ive been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, perspiciatis ut natus saepe repellendus expedita possimus at earum debitis veritatis corporis esse aut vel inventore accusantium soluta explicabo, optio facilis?")
    const randomText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nulla ducimus excepturi repellat consequatur sint, obcaecati assumenda eaque quod, veritatis blanditiis incidunt. Suscipit dolores quas enim iure natus quae unde?Veniam quisquam repudiandae magni illo cupiditate numquam fuga? Illo commodi veritatis, harum dolorum dignissimos quod tenetur non doloribus, architecto quis tempore ullam repellat explicabo aliquam minima adipisci id optio inventore.Voluptate quos quibusdam consequatur hic at nulla commodi atque autem perspiciatis sit delectus quasi dolorem, dignissimos unde nam alias aliquam harum! Expedita nesciunt tempore numquam nisi praesentium dolorem dicta aspernatur!Eos non cum consectetur corrupti vel maxime id, mollitia sed quidem iste nobis officiis expedita quos molestias blanditiis neque est deleniti ullam error dignissimos aperiam. Sunt itaque assumenda recusandae tempore.Quaerat molestiae, dolorem saepe nihil, aliquid obcaecati ab ducimus quisquam omnis dolore rerum distinctio tempora doloribus voluptatibus cum maiores tempore reiciendis! Dolore eveniet tempora id quasi esse amet vero tempore.Accusantium, nobis. Sint fuga ea et, voluptas beatae assumenda. Laborum odit quasi saepe reiciendis, dolores maiores deleniti accusantium. Recusandae explicabo delectus, impedit dignissimos incidunt molestias possimus nisi voluptas ducimus voluptates?";
    return (
    <div className=' h-80 bg-[#363C43] rounded-[18.89px] custom-shadow-divs'>
        <div className='flex space-x-3 pt-4 px-5'>
            <div className=' flex-col flex-grow space-y-20'><svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z' fill='url(#paint0_linear_2267_3329)'/><defs><linearGradient id='paint0_linear_2267_3329' x1='19.5' y1='27.5' x2='3.5' y2='2' gradientUnits='userSpaceOnUse'><stop stop-color='#4A4E54'/><stop offset='1' stop-color='#A3ADBA'/></linearGradient></defs></svg>
                <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
                <rect x="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
                <rect y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
                <rect x="10.6878" y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
                <rect y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
                <rect x="10.6878" y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54"/>
                </svg>
            </div>
            <div className='w-full h-72 '>
            <div className=' flex w-full h-1/5 justify-between bg-black px-2 py-2 text-[#A3ADB2] font-medium rounded-[23px]'>
                <button onClick={() => {setTab('about') , setPara("Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, perspiciatis ut natus saepe repellendus expedita possimus at earum debitis veritatis corporis esse aut vel inventore accusantium soluta explicabo, optio facilis?")}}
                 className={` rounded-2xl w-1/3 ${(tab === "about") ? "bg-[#28292F] text-white custom-shadow-tabs" : "bg-black text-[#A3ADB2]"}`}>
                    About Me
                </button>
                <button onClick={() => {setTab('exp') , setPara(randomText)}} className={` rounded-2xl w-1/3 ${(tab === "exp") ? "bg-[#28292F] text-white custom-shadow-tabs" : "bg-black text-[#A3ADB2]"}`}>
                    Experiences
                </button>
                <button onClick={() => {setTab('recommended') , setPara(randomText)}} className={` rounded-2xl w-1/3 ${(tab === "recommended") ? "bg-[#28292F] text-white custom-shadow-tabs" : "bg-black text-[#A3ADB2]"}`}>
                    Recommended
                </button>
            </div>
            <p className=' font-normal text-[#969696] text-[20px] mt-[35px] max-h-44 overflow-y-scroll overflow' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {para}
                </p>
            </div> 
            <div className=' pt-20'>
                <svg width="18" height="74" viewBox="0 0 18 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2267_3337)">
                <rect x="1" y="1" width="8" height="64" rx="4" fill="url(#paint0_linear_2267_3337)"/>
                </g>
                <defs>
                <filter id="filter0_d_2267_3337" x="0.0999999" y="0.0999999" width="17.8" height="73.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="4" dy="4"/>
                <feGaussianBlur stdDeviation="2.45"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2267_3337"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2267_3337" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_2267_3337" x1="-9" y1="8.5" x2="10.3151" y2="60.0069" gradientUnits="userSpaceOnUse">
                <stop stop-color="#888989"/>
                <stop offset="1" stop-color="#4A4E54"/>
                </linearGradient>
                </defs>
                </svg>

            </div> 
        </div>
    </div>
  )
}

export default Tabs