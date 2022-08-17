import { useState } from 'react'
import Button from '../../atoms/Button/Button'
import './tabManager.scss'

const tags = [
  { name: 'All Courses' },
  { name: 'My Courses' },
]

const TabManager = () => {
  const [selected, setSelected] = useState('All Courses')

  return (
    <div className="tabManager">
      {tags.map((tab) => (
        <Button
          onClick={setSelected}
          isSelected={selected === tab.name}
          key={tab.name}
          isBold={true}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  )
}

export default TabManager
