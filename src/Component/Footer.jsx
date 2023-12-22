const Footer = () => {
  return (
    <div>
      <ul className='flex gap-12 '>
        <li> <a href='#' className='bg-gradient-to-r from-sky-800 to-indigo-800 rounded-md px-2.5 py-1.5'>Facebook</a></li>
        <li> <a href='#' className='bg-gradient-to-r from-purple-500 to-pink-500 rounded-md px-2.5 py-1.5'>Instagram</a></li>
        <li> <a href='#' className='bg-gradient-to-r from-sky-400 to-indigo-400 rounded-md px-2.5 py-1.5'>Twitter</a></li>
      </ul>
      <div className='flex gap-4 mt-12'>
      <img src="./Public/Help-Avatar.svg" alt='Logo'/>
      <div>
        <p>Have any Question?</p>
        <a href='#'> Talk to a specialist</a>
      </div>
      </div>
    </div>
  )
}

export default Footer