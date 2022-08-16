import { useState } from 'react'
import Button from '../../atoms/Button/Button'
import './tagManager.scss'

const tags = [
  { name: 'All' },
  { name: 'Design' },
  { name: 'Bussiness' },
  { name: 'Marketing' },
  { name: 'Photography' },
  { name: 'Music' },
]

const TagManager = () => {
  const [selected, setSelected] = useState('All')

  return (
    <div className="tagManager">
      {tags.map((tag) => (
        <Button
          onClick={setSelected}
          isSelected={selected === tag.name}
          key={tag.name}
        >
          {tag.name}
        </Button>
      ))}
    </div>
  )
}

export default TagManager
