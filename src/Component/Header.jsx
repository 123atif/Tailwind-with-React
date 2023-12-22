import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div className='flex items-center justify-center gap-2'>
          <img src="./Public/Logo.svg" alt='Logo'/>
<button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg font-bold px-2.5 py-1.5'>Hosters Hiring</button>
        </div>
        <FaBars/>
      </div>
    </>
  )
}

export default Header;