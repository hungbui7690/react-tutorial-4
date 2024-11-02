export default function Button({ children, ...props }) {
  return (
    <button
      className='bg-stone-700 hover:bg-stone-600 px-4 py-2 rounded-md text-stone-400 text-xs md:text-base hover:text-stone-100'
      {...props}
    >
      {children}
    </button>
  )
}
