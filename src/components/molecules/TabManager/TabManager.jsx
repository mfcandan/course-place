import { courseTabs } from '../../../constants/courseTabs'
import { useStore } from '../../../store/store'
import Button from '../../atoms/Button/Button'
import './tabManager.scss'

const TabManager = () => {
  const { selectedTab, setSelectedTab } = useStore()
  const tabs = Object.values(courseTabs)

  return (
    <article className="tabManager">
      {tabs.map((tab) => (
        <Button
          onClick={() => setSelectedTab(tab)}
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
