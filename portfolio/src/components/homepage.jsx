import React from 'react'
import Skills from './skillcomponent'

const Homepage = () => {
  return (
    <div id='about' className='page_pad'>
      <span className='d-flex row'>
        <p className='col-11 text-start'>CHECK OUT MY</p>
      </span>
        <h2 className='text-start'>SKILLS</h2>
        <div className='d-flex skill flex-wrap justify-content-center rounded-4 p-5 skills'>
            <Skills img='' text='HTML'/>
            <Skills img='' text='CSS'/>
            <Skills img='' text='JS'/>
            <Skills img='' text='BOOTSTRAP'/>
            <Skills img='' text='SASS'/>
            <Skills img='' text='TAILWIND'/>
            <Skills img='' text='REACT'/>
            <Skills img='' text='REACT HOOKS'/>
            <Skills img='' text='GIT'/>
            <Skills img='' text='GITHUB'/>

        </div>
      
    </div>
  )
}

export default Homepage
