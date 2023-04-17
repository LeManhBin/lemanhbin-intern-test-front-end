import React from 'react'
import './TextWrapper.scss'
const TextWrapper = ({image}) => {
  return (
    <div className='text-wrapper'>
        <span className="text-wrapper__title">
            Lorem ipsum dolor sit amet
        </span>
        <div className="text-wrapper__desc">
            <div className="text-wrapper__desc--top">
                <img src={image} alt="" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at 
                </p>
            </div>
            <div className="text-wrapper__desc--bot">
                <p>
                    ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default TextWrapper