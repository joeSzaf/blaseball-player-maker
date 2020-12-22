import { useState } from 'react'

const useFormModal = () => {
  const [formIsShowing, setFormShowing] = useState(false)

  function formToggle() {
    console.log('before toggle')
    setFormShowing(!formIsShowing)
    console.log('after toggle')
  }

  return {
    formIsShowing,
    formToggle,
  }
}

export default useFormModal