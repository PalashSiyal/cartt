// import Link from 'next/link';

// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

import { Link } from 'react-router-dom';

export default function Login() {
  const Label = ({ htmlFor, children }) => {
    return (
      <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-700'>
        {children}
      </label>
    );
  };

  const Input = ({ id, type, placeholder, required }) => {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className='mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none'
      />
    );
  };

  const Button = ({ type, children, className }) => {
    return (
      <button
        type={type}
        className={`rounded bg-blue-500 px-4 py-2 font-bold text-white ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className='flex min-h-screen flex-col mt-10 pt-10 '>
      {/* <header className='py-4 md:py-6 xl:py-8'>
        <div className='container flex items-center space-x-4 px-4'>
        <Link className='flex items-center space-x-2' to='#'>
            <FlagIcon className='h-8 w-8' />
            <span className='text-lg font-bold'>Company</span>
          </Link>
          <nav className='ml-auto flex space-x-4'>
          <Link
              className='font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              to='#'
            >
              Features
            </Link>
            <Link
              className='font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              to='#'
            >
              Pricing
            </Link>
            <Link
              className='font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              to='#'
            >
              Contact
            </Link>
          </nav>
        </div>
      </header> */}
      <main className='flex-1 mt-10 pt-10'>
        <div className='mx-auto max-w-3xl bg-white rounded-lg space-y-8 px-4 shadow-lg'>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl font-bold pt-5'>Create an account</h1>
            <p className='text-gray-500 dark:text-gray-400'>
              Already have an account?
              <Link className='underline text-buttonColor pl-2' to='/login'>
  log in
</Link>

            </p>
          </div>
          <div className='space-y-4 px-6'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <Label htmlFor='username'>Username</Label>
                <Input id='username' required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' placeholder='m@example.com' required type='email' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' required type='password' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirm-password'>Confirm Password</Label>
                <Input id='confirm-password' required type='password' />
              </div>
            </div>
            <Link to='/login' className='w-full'>
              <button className='rounded bg-[rgba(34,34,34,1)] px-4 py-2 my-10 font-bold text-white w-full'>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </main>
      <footer className='border-t'>
        <div className='container flex items-center justify-between px-4 py-4'>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
           
          </div>
          <nav className='space-x-4 text-sm'>
            <Link className='underline' href='#'>
              Terms
            </Link>
            <Link className='underline' href='#'>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'   
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' />
      <line x1='4' x2='4' y1='22' y2='15' />
    </svg>
  );
}
