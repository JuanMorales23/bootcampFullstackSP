import React from 'react'

const Header = ({name, ocupation, srcPic, altPic}) => {
  return (
    <div className='container header imgHeader'>
        <div className="row align-items-center">
            <div className='col align-items-start'>
                <img src={srcPic} alt={altPic} className='profilePicture mt-3 mb-3 ' />
            </div>
            <div className="col">
                <h1 className=''>{name}</h1>
                <h2>{ocupation}</h2>
            </div>
        </div>
    </div>
  )
}

export default Header