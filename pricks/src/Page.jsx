import { useEffect } from 'react'
import Sidebar from '../components/sidebar'
import SetColors from '../functions/updateColors'

export default function Page() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='text-textColor bg-bgColor w-full'>
        <div className='bg-primary' >Primary Color</div>
        <div className='bg-secondary' >Secondary Color</div>
        <div className='bg-bgPrimary' >Background Primary</div>
        <div className='bg-bgSecondary' >Background Secondary</div>
        <div className='text-textPrimary' >Text Primary</div>
        <div className='text-textSecondary' >Text Secondary</div>
      </div>
    </div>
  )
}
