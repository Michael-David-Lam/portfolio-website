import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className="header flex items-center justify-between m-auto rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10" >
        <div className='logo'>
          Logo
        </div>
        <div className='justify-between px-4 gap-7'>
          <nav>
            <ul className='flex gap-5'>
              <li>
                <Link href=''>Home</Link>
              </li>

              <li>
                <Link href=''>Projects</Link>
              </li>

              <li>
                <Link href=''>About</Link>
              </li>

            </ul>
          </nav>
        </div>

    </div>
  )
}

export default Nav