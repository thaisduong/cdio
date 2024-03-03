 {/*Create new user */}
 const AddUser = ({ active }) => {
    
        if (active){
            return (
            <div className='w-[700px] h-[445px]  bg-zinc-700'>
            <div className='flex justify-center'>
                <div className='flex bg-slate-600 w-[300px] h-[42px] text-yellow-400 items-center justify-center rounded-3xl col-start-2 col-end-3'>
                    Create User
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='col-start-1 col-end-2 '>
                    <div className=' ml-[4rem] mt-5'>
                        <div className='text-gray-900'>Full Name</div>
                        <input type="text" className='border border-slate-500 w-[250px] h-[30px] rounded-xl mt-2' />
                        </div>   
                        <div className=' ml-[4rem] mt-3'>
                        <div className='text-gray-900'>Password</div>
                        <input type="text" className='border border-slate-500 w-[250px] h-[30px] rounded-xl mt-2' />
                        </div>  
                        <div className=' ml-[4rem] mt-3'>
                        <div className='text-gray-900'>ID Card</div>
                        <input type="text" className='border border-slate-500 w-[250px] h-[30px] rounded-xl mt-2' />
                        </div>    
                        <div className=' ml-[4rem] mt-3'>
                        <div className='text-gray-900'>Floor</div>
                        <input type="text" className='border border-slate-500 w-[250px] h-[30px] rounded-xl mt-2' />
                        </div>                                 
                </div>
                
                <div className='col-start-2 col-end-3 ml-[-4rem]'>
                <div className=' ml-[4rem] mt-5'>
                        <div className='text-gray-900'>Phone number</div>
                        <input type="text" className='border border-slate-500 w-[250px] h-[30px] rounded-xl mt-2' />
                        </div>   
                        <div className=' ml-[4rem] mt-3'>
                        <div className='text-gray-900'>Email</div>
                        <input type="text" className='border border-slate-500 w-[250px] h-[30px] rounded-xl mt-2' />
                        </div>  
                        <div className=' ml-[4rem] mt-3'>
                        <div className='text-gray-900'>Hometown</div>
                        <input type="text" className='border border-slate-500 w-[250px] h-[30px] rounded-xl mt-2' />
                        </div>    
                        <div className=' ml-[4rem] mt-3'>
                        <div className='text-gray-900'>Room</div>
                        <input type="text" className='border border-slate-500 w-[250px] h-[30px] rounded-xl mt-2' />
                        </div>  
                        <div className='flex ml-[8rem] mt-[2rem]'>
                            <button className='bg-red-600 h-[32px] w-[80px] rounded-md '>Cancle</button>
                            <button className='bg-cyan-950 h-[32px] w-[80px] rounded-md ml-[1.5rem] '>Create</button>
                            </div> 
           
           
                </div>
            </div>
           
           </div>
            )
        }
        
    
  }
  
  export default AddUser
 