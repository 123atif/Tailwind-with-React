
const Body = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-20'>
        <img src="./Public/Blue-Shape.svg" alt='Logo' className='absolute -rotate-45 h-64'/>
        <img src="./Public/Pink-Shape.svg" alt='Logo' className='absolute -rotate-[30deg] h-64'/>
        <img src="./Public/Purple-Shape.svg" alt='Logo' className='absolute -rotate-[15deg] h-64'/>
        <img src="./Public/Hero-Model.png" alt='Logo' className='absolute h-64'/>
      </div>
      <div className='mt-36'>
        <h1 className='text-2xl font-serif font-bold h-12'>Host your Website less than 5 mintues</h1>
        <p className='font-sans space-y-6'>With Hoster, get your Website up and running in no less than 5 mintues with the most competitive pricing packages </p>
      <form action='' className='flex flex-col'>
     <input type='email' placeholder='Enter your Email' className='rounded-md px-4 py-3 mt-2 placeholder:text-blue-700'/>
     <button className='rounded-md px-4 py-2 bg-blue-600 hover:bg-blue-900 text-white mt-4'>Join Waitlist</button>
      </form>
      </div>
      <div className='flex gap-3 font-mono space-y-4'>
      <img src="./Public/Checkmark.svg" alt='Logo'/>
      <p>No Spam, ever . Unsubscribe anytime</p>
      </div>
    </div>
  )
}

export default Body