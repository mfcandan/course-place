import create from 'zustand'
import { courseTabs } from '../constants/courseTabs'

export const useStore = create((set, get) => ({
  user: {
    name: 'Marry Jane',
    imgUrl:
      'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg',
    hubPoints: 500,
  },
  courseDetailModal: {
    isOpen: false,
    course: {},
  },
  selectedTab: courseTabs.allCourses,

  toggleModal: (course) => {
    set(() => ({
      courseDetailModal: {
        isOpen: !get().courseDetailModal.isOpen,
        course,
      },
    }))
  },
  setSelectedTab: (tab) => {
    set(() => ({
      selectedTab: tab,
    }))
  },
}))
