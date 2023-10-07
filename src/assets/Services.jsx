
import { useState } from 'react'
import Serviceapi from '../Components/ServiceApi'
import ServicesItems from '../Components/ServicesItems'

const Services = () => {
  const [items, setitems] = useState(Serviceapi)
  return (
    <>
     
     <ServicesItems temp={items}/>
    </>
  )
}

export default Services
