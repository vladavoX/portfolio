const Links = () => {
  return (
    <div>
      <span className='text-green-800 ml-8 lowercase italic'>&lt;p&gt;</span>
      <p className='ml-8 uppercase not-italic'>
        <span className='text-green-800 italic ml-4 lowercase'>&lt;a&gt;</span>
        <br />
        <a
          className='hover:text-green-600 duration-150 ml-8'
          href='#about'
        >
          about me
        </a>{' '}
        /{' '}
        <a
          className='hover:text-green-600 duration-150'
          href='#projects'
        >
          projects
        </a>{' '}
        /{' '}
        <a
          className='hover:text-green-600 duration-150'
          href='#contact'
        >
          contact
        </a>
        <br />
        <span className='text-green-800 italic lowercase ml-4'>&lt;/a&gt;</span>
      </p>
      <span className='text-green-800 italic lowercase ml-8'>&lt;/p&gt;</span>
      <br />
      <span className='text-green-800 italic lowercase ml-4'>
        &lt;/section&gt;
      </span>
    </div>
  )
}

export default Links
