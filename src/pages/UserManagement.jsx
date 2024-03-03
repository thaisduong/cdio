import { Home, Zap, CreditCard, User, BedDouble, MessagesSquare, Bell, FilePen, LogOut, Bolt, HelpCircle } from 'lucide-react';
import {AddUser} from './components/AddUser'
const listMenu = [
    {
        name: "Home Page",
        path: "/",
        icon: <Home size={24} />
    },
    {
        name: "Utilities",
        path: "/utilities",
        icon: <Zap size={24} />
    },
    {
        name: "Payment",
        path: "/payment",
        icon: <CreditCard size={24} />
    },
    {
        name: "User Management",
        path: "/user-management",
        icon: <User size={24} />
    },
    {
        name: "Room Management",
        path: "/room-management",
        icon: <BedDouble size={24} />,
    },
    {
        name: "Chat",
        path: "/chat",
        icon: <MessagesSquare size={24} />
    },
    {
        name: "Notification",
        path: "/notification",
        icon: <Bell size={24} />
    }
];

const accountList = [
    {
        name: "Profile",
        path: "/profile",
        icon: <FilePen size={24} />
    },
    {
        name: "Setting",
        path: "/setting",
        icon: <Bolt size={24} />
    },
    {
        name: "Logout",
        path: "/profile",
        icon: <LogOut size={24} />
    },
]

const UserManagement = () => {
    return (
        <div className="w-full h-full grid grid-cols-6 ">
            {/* Sidebar */}
            <div className="w-[250px] h-full py-9 px-6 bg-gradient-to-b from-[#3C4448] to-[#202021] ">
                <div className="mb-14 flex items-center gap-3">
                    <Home size={40} />
                    <div>
                        <h1 className="text-white text-xl font-bold">VILAHOUSE</h1>
                        <p className="text-[#D0E6EA] text-sm">Ten phong tro</p>
                    </div>
                </div>
                {/* Menu */}
                <nav className="flex flex-col gap-2 items-start mb-5">
                    {listMenu.map((item) => (
                        <div className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs" key={item.name}>
                            <div className="flex items-center gap-3 font-bold cursor-pointer">
                                {item.icon}
                                <p className="text-sm">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </nav>

                <h4 className="uppercase text-white text-xs font-bold mb-4">Account</h4>
                <nav className="flex flex-col gap-2 items-start mb-8">
                    {accountList.map((item) => (
                        <div className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs" key={item.name}>
                            <div className="flex items-center gap-3 font-bold cursor-pointer">
                                {item.icon}
                                <p className="text-sm">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </nav>

                <div className="bg-[#F6F6BD] w-full rounded-[20px] p-6">
                    <div className="w-9 h-9 flex items-center justify-center bg-[#3C4448] rounded-md text-[#F6F6BD] mb-5">
                        <HelpCircle color='#F6F6BD' size={24} />
                    </div>
                    <p className="text-[#3C4448] text-xs font-medium">Need help?</p>
                    <p className="text-[#3C4448] text-sm mb-3">Contact us</p>
                    <button className="w-full bg-[#3C4448] text-[#F6F6BD]">Contact</button>
                </div>
            </div>
            {/* Main Content */}
            <div className="h-full bg-white col-start-2 col-end-7 ">
                <div className='flex'>
                    <h1 className="text-2xl mt-9 font-bold col-start-2 col-end-3 ">User Management
                        <div className='w-10 h-10 mt-[-2.25rem] mr-[-1rem]  bg-amber-200 rounded-full'></div>
                    </h1>
                    {/* search */}
                    <div className=' col-start-5 col-end-6 '>
                        <input type="text" className='border border-gray-300 rounded w-[15rem] h-8 mt-10 ml-[46rem] pl-[30px]'
                            placeholder='Search' />
                        <a href="" className='search_input'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-[-1.5rem] ml-[46.5rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </a>
                    </div>
                    {/*ten dang nhap */}
                    <div className='col-start-6 col-end-7  '>
                        <div className='ml-20 font-bold mt-10'>Hello, Admin 123</div>
                        <div className='italic ml-[11rem] mt-[-0.5rem]'>Host</div>

                    </div>
                    <img src="" alt="" className='rounded-full bg-slate-600 h-10 w-10 mt-9 ml-3' />
                </div>
                {/*uss */}
                <div className='flex'>
                    {/*user table*/}
                    <div className='text-gray-400 text-lg mt-[3rem]'>User Table</div>

                    <button  className='bg-cyan-950 h-8 w-[9rem] rounded-lg text-white pl-1 mt-[2.5rem] ml-[61.5rem] items-center'>
                        <div className='ml-[-0.3rem] mt-[-0.1]'>Create new user</div>
                    </button>
                    <div className='flex'>
                        <select className='border rounded-md w-[7.5rem] h-8 divide-black mt-[2.5rem] ml-4 '>
                            <option disabled selected hidden>Select</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <div className='border rounded-md w-[5rem] h-8 ml-4 mt-[2.5rem] divide-black' >
                            <span className='ml-10 mt-1'>Sort</span>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 h-[515px] w-[1440px] rounded-lg'>

                    <div className='flex pt-2'>
                        <div className='text-gray-500 ml-4'>User</div>
                        <div className='text-gray-500 ml-[17rem]'>Phone</div>
                        <div className='text-gray-500 ml-[12rem]'>Room</div>
                        <div className='text-gray-500 ml-[12rem]'>Due</div>
                        <div className='text-gray-500 ml-[15rem]'>Room Charge</div>
                        <div className='text-gray-500 ml-[12rem]'>Action</div>
                    </div>
                    <div className='border border-gray-500 w-[1420px] ml-2.5'></div>
                    <div className='flex pt-2 pb-2' >
                        <img src="" alt="" className='bg-slate-400 h-[2rem] w-[2rem] ml-3 mt-2 rounded-lg' />
                        <div className='block ml-2 mt-1 text-gray-600 font-medium text-sm'>
                            <div>Nguyen Duong Qua</div>
                            <div>duongqua.123@gmail.com</div>
                        </div>
                        <div className='text-gray-600 ml-[6.1rem] mt-3 font-medium text-sm'>0123456789</div>
                        <div className='text-gray-600 ml-[10.2rem] mt-3 font-medium text-sm'>Room 101</div>
                        <div className='text-gray-600 ml-[10.7rem] mt-3 font-medium text-sm'>24/12/2023</div>
                        <div className='text-gray-600 ml-[12.5rem] mt-3 font-medium text-sm'>Paid</div>
                        <div className='text-gray-600 ml-[17.5rem] mt-3 font-medium text-sm'>Edit</div>
                    </div>
                    <div className='border border-gray-500 w-[1420px] ml-2.5'></div>
                    <div className='flex  pt-2 pb-2' >
                        <img src="" alt="" className='bg-slate-400 h-[2rem] w-[2rem] ml-3 mt-2 rounded-lg' />
                        <div className='block ml-2 mt-1 text-gray-600 font-medium text-sm'>
                            <div>Nguyen Duong Qua</div>
                            <div>duongqua.123@gmail.com</div>
                        </div>
                        <div className='text-gray-600 ml-[6.1rem] mt-3 font-medium text-sm'>0123456789</div>
                        <div className='text-gray-600 ml-[10.2rem] mt-3 font-medium text-sm'>Room 101</div>
                        <div className='text-gray-600 ml-[10.7rem] mt-3 font-medium text-sm'>24/12/2023</div>
                        <div className='text-gray-600 ml-[12.5rem] mt-3 font-medium text-sm'>Paid</div>
                        <div className='text-gray-600 ml-[17.5rem] mt-3 font-medium text-sm'>Edit</div>
                    </div>
                    <div className='border border-gray-500 w-[1420px] ml-2.5'></div>
                    <div className='flex  pt-2 pb-2' >
                        <img src="" alt="" className='bg-slate-400 h-[2rem] w-[2rem] ml-3 mt-2 rounded-lg' />
                        <div className='block ml-2 mt-1 text-gray-600 font-medium text-sm'>
                            <div>Nguyen Duong Qua</div>
                            <div>duongqua.123@gmail.com</div>
                        </div>
                        <div className='text-gray-600 ml-[6.1rem] mt-3 font-medium text-sm'>0123456789</div>
                        <div className='text-gray-600 ml-[10.2rem] mt-3 font-medium text-sm'>Room 101</div>
                        <div className='text-gray-600 ml-[10.7rem] mt-3 font-medium text-sm'>24/12/2023</div>
                        <div className='text-gray-600 ml-[12.5rem] mt-3 font-medium text-sm'>Paid</div>
                        <div className='text-gray-600 ml-[17.5rem] mt-3 font-medium text-sm'>Edit</div>
                    </div>
                    <div className='border border-gray-500 w-[1420px] ml-2.5'></div>
                    <div className='flex  pt-2 pb-2' >
                        <img src="" alt="" className='bg-slate-400 h-[2rem] w-[2rem] ml-3 mt-2 rounded-lg' />
                        <div className='block ml-2 mt-1 text-gray-600 font-medium text-sm'>
                            <div>Nguyen Duong Qua</div>
                            <div>duongqua.123@gmail.com</div>
                        </div>
                        <div className='text-gray-600 ml-[6.1rem] mt-3 font-medium text-sm'>0123456789</div>
                        <div className='text-gray-600 ml-[10.2rem] mt-3 font-medium text-sm'>Room 101</div>
                        <div className='text-gray-600 ml-[10.7rem] mt-3 font-medium text-sm'>24/12/2023</div>
                        <div className='text-gray-600 ml-[12.5rem] mt-3 font-medium text-sm'>Paid</div>
                        <div className='text-gray-600 ml-[17.5rem] mt-3 font-medium text-sm'>Edit</div>
                    </div>
                    <div className='border border-gray-500 w-[1420px] ml-2.5'></div>
                    <div className='flex  pt-2 pb-2' >
                        <img src="" alt="" className='bg-slate-400 h-[2rem] w-[2rem] ml-3 mt-2 rounded-lg' />
                        <div className='block ml-2 mt-1 text-gray-600 font-medium text-sm'>
                            <div>Nguyen Duong Qua</div>
                            <div>duongqua.123@gmail.com</div>
                        </div>
                        <div className='text-gray-600 ml-[6.1rem] mt-3 font-medium text-sm'>0123456789</div>
                        <div className='text-gray-600 ml-[10.2rem] mt-3 font-medium text-sm'>Room 101</div>
                        <div className='text-gray-600 ml-[10.7rem] mt-3 font-medium text-sm'>24/12/2023</div>
                        <div className='text-gray-600 ml-[12.5rem] mt-3 font-medium text-sm'>Paid</div>
                        <div className='text-gray-600 ml-[17.5rem] mt-3 font-medium text-sm'>Edit</div>
                    </div>
                    <div className='border border-gray-500 w-[1420px] ml-2.5'></div>
                    <div className='flex  pt-2 pb-2' >
                        <img src="" alt="" className='bg-slate-400 h-[2rem] w-[2rem] ml-3 mt-2 rounded-lg' />
                        <div className='block ml-2 mt-1 text-gray-600 font-medium text-sm'>
                            <div>Nguyen Duong Qua</div>
                            <div>duongqua.123@gmail.com</div>
                        </div>
                        <div className='text-gray-600 ml-[6.1rem] mt-3 font-medium text-sm'>0123456789</div>
                        <div className='text-gray-600 ml-[10.2rem] mt-3 font-medium text-sm'>Room 101</div>
                        <div className='text-gray-600 ml-[10.7rem] mt-3 font-medium text-sm'>24/12/2023</div>
                        <div className='text-gray-600 ml-[12.5rem] mt-3 font-medium text-sm'>Paid</div>
                        <div className='text-gray-600 ml-[17.5rem] mt-3 font-medium text-sm'>Edit</div>
                    </div>
                    <div className='border border-gray-500 w-[1420px] ml-2.5'></div>
                    <div className='flex justify-center items-center mt-12'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <div className='pl-2 pr-2'>1</div>
                        <div className='pl-2 pr-2'>2</div>
                        <div className='pl-2 pr-2'>3</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
            </div>
           
        </div>


    )
}

export default UserManagement