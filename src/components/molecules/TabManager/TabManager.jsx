import { courseTabs } from '../../../constants/courseTabs'
import { useStore } from '../../../store/store'
import Button from '../../atoms/Button/Button'
import './tabManager.scss'

const TabManager = () => {
  const { selectedTab, setSelectedTab, setSearchQuery } = useStore()
  const tabs = Object.values(courseTabs)

  const handleTab = (tab) => {
    setSelectedTab(tab)
    setSearchQuery('')
  }

  return (
    <article className="tabManager">
      {tabs.map((tab) => (
        <Button
          onClick={() => handleTab(tab)}
          isSelected={selectedTab === tab}
          key={tab}
          isBold={true}
        >
          {tab}
        </Button>
      ))}
    </article>
  )
}

export default TabManager
