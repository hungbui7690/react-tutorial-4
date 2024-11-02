export default function ProjectsSidebar() {
  return (
    <aside className='bg-stone-900 px-8 py-16 rounded-r-xl w-1/3 md:w-72 text-stone-50'>
      <h2 className='mb-8 font-bold text-stone-200 md:text-xl uppercase'>
        Your Projects
      </h2>
      <div>
        <button className='bg-stone-700 hover:bg-stone-600 px-4 py-2 rounded-md text-stone-400 text-xs md:text-base hover:text-stone-100'>
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  )
}
