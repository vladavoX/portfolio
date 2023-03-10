const Form = () => {
  return (
    <form className='flex flex-col items-center justify-center gap-5 border-l-2 border-gray-700 bg-gray-900 p-10 rounded-xl not-italic text-base w-full'>
      <div className='flex gap-5 w-full'>
        <div className='flex flex-col w-full'>
          <label htmlFor='firstname'>
            First Name<span className='text-green-500'>*</span>
          </label>
          <input
            placeholder='Enter your first name...'
            className='bg-gray-900 border-2 border-gray-700 rounded-md p-2 text-gray-50'
            required
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='lastname'>Surname</label>
          <input
            placeholder='Enter your surname...'
            className='bg-gray-900 border-2 border-gray-700 rounded-md p-2 text-gray-50'
          />
        </div>
      </div>
      <div className='flex gap-5 w-full'>
        <div className='flex flex-col w-full'>
          <label htmlFor='email'>
            Email<span className='text-green-500'>*</span>
          </label>
          <input
            placeholder='Enter your email...'
            className='bg-gray-900 border-2 border-gray-700 rounded-md p-2 text-gray-50'
            required
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='subject'>
            Subject<span className='text-green-500'>*</span>
          </label>
          <input
            placeholder='Subject...'
            className='bg-gray-900 border-2 border-gray-700 rounded-md p-2 text-gray-50'
            required
          />
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <label htmlFor='message'>
          Message<span className='text-green-500'>*</span>
        </label>
        <textarea
          placeholder='Message...'
          className='bg-gray-900 border-2 border-gray-700 rounded-md p-2 text-gray-50 w-full'
          required
        />
      </div>
      <p className='text-xs'>
        Everything marked with <span className='text-green-500'>*</span> is
        required.
      </p>
      <button
        type='submit'
        className='bg-green-800 hover:bg-green-500 text-gray-50 font-semibold py-2 px-14 rounded-md duration-150'
      >
        Send Message
      </button>
    </form>
  )
}

export default Form
