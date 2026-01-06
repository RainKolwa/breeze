import { useState, useEffect } from 'react'

const getInitialSnowEffect = (): boolean => {
  if (typeof window !== 'undefined') {
    const storedSnowEffect = localStorage.getItem('snowEffect')
    if (storedSnowEffect !== null) {
      return storedSnowEffect === 'true'
    }
  }
  return false
}

const useSnowEffect = () => {
  const [snowEnabled, setSnowEnabled] = useState<boolean>(getInitialSnowEffect)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('snowEffect', String(snowEnabled))
    }
  }, [snowEnabled])

  const toggleSnow = () => {
    setSnowEnabled((prev) => !prev)
  }

  return { snowEnabled, toggleSnow }
}

export default useSnowEffect
