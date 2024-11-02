// 2a. isSelected
export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING')
  return (
    <li>
      {/* 2b. className */}
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}
