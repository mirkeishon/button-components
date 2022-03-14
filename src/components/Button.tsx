import React from 'react'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {MdOutlineLocalBar} from 'react-icons/md'

interface button  {
    text: string,
    textColor: string,
    border: string,
    borderColor: string,
    bg: string,
    shadow: string,
    shadowColor: string,
    size: string,
    startIcon: any,
    endIcon: any,
}

export const Button = ({variant = '', hover = 
false, disableShadow = false, disabled = false, startIcon = '', endIcon = '', size='', color=''}) => {
    
    let button : button = {
        text: 'Default',
        textColor: 'text-slate-700',
        border: '',
        borderColor: '',
        bg: 'bg-gray-200',
        shadow: 'shadow-md',
        shadowColor: 'shadow-gray-300',
        size: 'h-10 w-24',
        startIcon: '',
        endIcon: '',
    }

    if(color){
        if(color === 'default'){
            button = {
                ...button,
                bg: 'bg-gray-200'
            }
        }
        if(color === 'primary'){
            button = {
                ...button,
                bg: 'bg-blue-500',
                textColor: 'text-white',
                shadowColor: 'shadow-blue-400'
            }
        }
        if(color === 'secondary'){
            button = {
                ...button,
                bg: 'bg-slate-700',
                textColor: 'text-white',
                shadowColor: 'shadow-slate-600'
            }
        }
        if(color === 'danger'){
            button = {
                ...button,
                bg: 'bg-red-500',
                textColor: 'text-white',
                shadowColor: 'shadow-red-400'
            }
        }
    }

    if(variant === 'outline'){
        button = {
            ...button,
            textColor: 'text-blue-500',
            border: 'border',
            borderColor: 'border-blue-500',
            bg: 'bg-white'}
    }
    if(variant === 'text'){
        button = {
            ...button,
            textColor: 'text-blue-500',
            border: '',
            bg: '',
            shadow: '',
            shadowColor: ''
        }
    }
    if(hover){
        button = {
            ...button,
            bg: 'bg-gray-400'
        }
        if(variant === 'outline'){
            button = {
                ...button,
                bg: 'bg-blue-100'
            }
        }
        if(variant === 'text'){
            button = {
                ...button,
                bg: 'bg-blue-100',
            }
        }

        if(color === 'default'){
            button = {
                ...button,
                bg: 'bg-gray-400'
            }
        }
        if(color === 'primary'){
            button = {
                ...button,
                bg: 'bg-blue-700'
            }
        }
        if(color === 'secondary'){
            button = {
                ...button,
                bg: 'bg-slate-800'
            }
        }
        if(color === 'danger'){
            button = {
                ...button,
                bg: 'bg-red-700'
            }
        }
            
        }
    if(startIcon){
        
        if(startIcon.toLowerCase() === 'mdlocalgrocerystore'){
            button = {
                ...button,
                startIcon: <MdOutlineLocalGroceryStore className='mr-2'/>,
                size: 'h-10 w-28'
            }
        }
        if(startIcon.toLowerCase() === 'mdlocalbar'){
            button = {
                ...button,
                startIcon: <MdOutlineLocalBar className='mr-2'/>,
                size: 'h-10 w-28'
            }
        }
    }
    if(endIcon){
        
        if(endIcon.toLowerCase() === 'mdlocalgrocerystore'){
            button = {
                ...button,
                endIcon: <MdOutlineLocalGroceryStore className='ml-2'/>,
                size: 'h-10 w-28'
            }
        }
        if(endIcon.toLowerCase() === 'mdlocalbar'){
            button = {
                ...button,
                endIcon: <MdOutlineLocalBar className='ml-2'/>,
                size: 'h-10 w-28'
            }
        }
    }

    if(size){
        if(size === 'sm'){
            button = {
            ...button,
            size: 'h-8 w-20'}
        }
        if(size === 'md'){
            button = {
                ...button,
                size: 'h-10 w-24'
            }
        }
        if(size === 'lg'){
            button = {
                ...button,
                size: 'h-12 w-28'
            }
        }
    } 

    
    if(disableShadow){
            button = {
                ...button,
                shadow: '',
            }
        }
    if(disabled){
        button = {
            ...button,
            text: 'Disabled',
            textColor: 'text-gray-400',
            shadow: '',
            
        }
    }

    return (
        
        disabled ?
        <button disabled className={`font-medium ${button.border} ${button.textColor} ${button.borderColor} ${button.bg} ${button.size} ${button.shadow} rounded-md text-sm inline-block ${button.shadowColor}`}>
            {button.text}
            </button>   
        :
        
        <button className={` inline-flex items-center justify-center font-medium ${button.border} ${button.textColor}  ${button.borderColor} ${button.bg} ${button.size} ${button.shadow} ${button.shadowColor} rounded-md text-sm`}>
            {button.startIcon}
            {button.text}
            {button.endIcon}
            </button>
        
  )
}
