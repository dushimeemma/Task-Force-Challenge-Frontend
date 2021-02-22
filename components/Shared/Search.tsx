const Search = () => {
  return (
    <div className='w-auto flex justify-center items-center bg-light-light border-2 rounded-lg'>
      <img src='search.png' alt='' className='w-5 h-5 mx-2' />
      <input type='text' placeholder='Search' className='py-3' />
      <button className='px-3 bg-dark-light py-3 text-light-light rounded-r-lg'>
        Search
      </button>
    </div>
  );
};
export default Search;
