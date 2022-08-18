import create from 'zustand'
import { courseTabs } from '../constants/courseTabs'
import { allCoursesData } from '../mock/mockData'

export const useStore = create((set, get) => ({
  // initial values
  user: {
    name: 'Marry Jane',
    imgUrl:
      'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg',
    hubPoints: 350,
  },
  courses: [],
  myCourses: [],
  courseDetailModal: {
    isOpen: false,
    course: {},
  },
  selectedTab: courseTabs.allCourses,
  searchQuery: '',

  // actions
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
  fetchCourses: () => {
    try {
      const data = allCoursesData
      set(() => ({
        courses: data,
      }))
      get().fetchMyCourses()
    } catch (error) {
      console.log('error', error)
    }
  },
  fetchMyCourses: () => {
    try {
      const data = get().courses
      const courses = data.filter((course) => course.isEnabled)
      set(() => ({
        myCourses: courses,
      }))
    } catch (error) {
      console.log('error', error)
    }
  },
  enrollCourse: (price, courseId) => {
    let totalPoints = get().user.hubPoints
    const courses = get().courses.map((course) => {
      if (course.id === courseId && totalPoints >= price) {
        totalPoints -= price
        course.isEnabled = true
      }
      return course
    })

    set(() => ({
      courses,
      user: { ...get().user, hubPoints: totalPoints },
    }))
  },
  setSearchQuery: (value) => {
    set(() => ({
      searchQuery: value,
    }))
  },
}))
