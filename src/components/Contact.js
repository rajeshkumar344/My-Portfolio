import React from 'react'

export default function Contact() {
  return (
    <div className='flex justify-center align-middle pt-4'>
        <div className='text flex flex-col items-center gap-6 m-6'>
            <div className='mt-2'>
                <h1 className='font-bold pb-2 text-xl'>Want to work with me ?</h1>
                <p>Reach out to me using the form below</p>
            </div>
            <div className='flex flex-col justify-center align-middle gap-6 m-2 w-full pl-10 pr-10'>
                <input className=' ipt p-1 ' type='text'placeholder='⚕️Your name'/>
                <input className='ipt p-1' type='email'placeholder='✉️ Email address'/>
                <textarea className='ipt p-2' placeholder='✍️Type a message'></textarea>
                <p className='p-2 font-bold hover:scale-90 shadow '
                >📞+ 8555082139</p>
                <button className='btn btn-primary'>SEND MESSAGE</button>
            </div>
        </div>
    </div>
  )
}
