import React from 'react'
import { Button } from './Button'

const Buttons = () => {
  return (
    <div className='lg:ml-52 ml-0 pl-7 pt-7 '>
        <div className='flex flex-wrap mb-4'>
            <div className='space-y-4 w-1/2 sm:w-1/4 h-28'>
                <p className='text-xs text-gray-800'>{'<Button />'}</p>
                <Button/>
            </div>
            <div className='space-y-4 w-1/2 sm:w-1/4 h-28'>
                <p className='text-gray-400 text-xs'>{'&:hover, &:focus'}</p>
                <Button hover/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'>
            <div className='space-y-4 w-1/2 sm:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button variant="outline" />'}</p>
                <Button variant='outline'/>
            </div>
            <div className='space-y-4 w-1/2 sm:w-1/4 min-w-min h-28'>
                <p className='text-gray-400 text-xs whitespace-nowrap'>{'&:hover, &:focus'}</p>
                <Button variant='outline' hover/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'>
            <div className='space-y-4 w-1/2 sm:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button variant="text" />'}</p>
                <Button variant='text' />
            </div>
            <div className='space-y-4 w-1/2 sm:w-1/4 h-28'>
                <p className='text-gray-400 text-xs'>{'&:hover, &:focus'}</p>
                <Button variant='text' hover/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'>
            <div className='space-y-4 w-1/2 sm:w-1/4 h-28'>
                <p className='text-xs text-gray-800'>{'<Button disableShadow />'}</p>
                <Button disableShadow/>
            </div>           
        </div>
        <div className='flex flex-wrap mb-4'>
            <div className='space-y-4 min-w-min w-1/2 sm:w-1/4 h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button disabled />'}</p>
                <Button disabled/>
            </div>
            <div className='space-y-4 min-w-min w-1/2 sm:w-1/4 h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button variant="text" disabled />'}</p>
                <Button variant='text' disabled/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'>
            <div className='space-y-4 w-1/2  md:w-1/3 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button startIcon="MdLocalGroceryStore" />'}</p>
                <Button color='primary' startIcon='MdLocalGroceryStore'/>                
            </div>
            <div className='space-y-4 w-1/2  md:w-1/3 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button endIcon="MdLocalGroceryStore" />'}</p>
                <Button color='primary' endIcon='MdLocalGroceryStore'/>
            </div>            
        </div>
        <div className='flex flex-wrap mb-4'>
            <div className='space-y-4 w-1/2 md:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button size="sm" />'}</p>
                <Button size='sm'/>
            </div>
            <div className='space-y-4 w-1/2 md:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button size="md" />'}</p>
                <Button size='md'/>
            </div>
            <div className='space-y-4 w-1/2 md:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button size="lg" />'}</p>
                <Button size='lg'/>
            </div>
            <div className='w-1/2 md:w-1/4 min-w-min'></div>
        </div>
        <div className='flex flex-wrap mb-4'>
            <div className='space-y-4 w-1/2 md:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button color="default" />'}</p>
                <Button color='default'/>
            </div>
            <div className='space-y-4 w-1/2 md:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button color="primary" />'}</p>
                <Button color='primary'/>
            </div>
            <div className='space-y-4 w-1/2 md:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button color="secondary" />'}</p>
                <Button color='secondary'/>
            </div>
            <div className='space-y-4 w-1/2 md:w-1/4 min-w-min h-28'>
                <p className='text-xs text-gray-800 whitespace-nowrap'>{'<Button color="danger" />'}</p>
                <Button color='danger'/>
            </div>
        </div>
        <div className='flex mb-4 flex-wrap'>
            <div className='space-y-4 w-1/2 md:w-1/4 h-28'>
                <p className='text-gray-400 text-xs'>{'&:hover, &:focus'}</p>
                <Button color='default' hover/>
            </div>
            <div className='space-y-4 w-1/2 md:w-1/4 h-28 mt-8'>
                <Button color='primary' hover/>
            </div>
            <div className='space-y-4 w-1/2 md:w-1/4 h-28 mt-8'>
                <Button color='secondary' hover/>
            </div>
            <div className='space-y-4 w-1/2 md:w-1/4 h-28 mt-8'>
                <Button color='danger' hover/>
            </div>
        </div>
        <p className='flex text-gray-500 text-xs font-Ubuntu mr-7'>Icons:
            <a className='ml-2 font-Ubuntu' rel='noreferrer' href="https://react-icons.github.io/react-icons/icons?name=md" target='_blank'>
                https://react-icons.github.io/react-icons/icons?name=md
            </a>
        </p>
    </div>
  )
}

export default Buttons