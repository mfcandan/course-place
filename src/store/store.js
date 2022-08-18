import create from 'zustand'

export const useStore = create((set, get) => ({
  courseDetailModal: {
    isOpen: false,
    course: {},
  },

  toggleModal: (course) => {
    set(() => ({
      courseDetailModal: {
        isOpen: !get().courseDetailModal.isOpen,
        course,
      },
    }))
  },
}))
