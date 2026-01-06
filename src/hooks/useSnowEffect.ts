import { useState, useEffect } from 'react'

const isWinter = (): boolean => {
  if (typeof window === 'undefined') return false
  
  const month = new Date().getMonth() + 1 // getMonth() returns 0-11
  
  // Winter months: December (12), January (1), February (2)
  return month === 12 || month === 1 || month === 2
}

const useSnowEffect = () => {
  const [snowEnabled, setSnowEnabled] = useState<boolean>(false)

  useEffect(() => {
    // Check if it's winter on mount
    setSnowEnabled(isWinter())
  }, [])

  return { snowEnabled }
}

export default useSnowEffect
