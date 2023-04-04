import React,{useState} from 'react'
import Carsousel from '../../../components/carousel/Carsousel'



import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

import useFetch from '../../../hooks/useFetch'

const Trending = () => {
    
    const [endpoint, setEndpoint] = useState("day")
    
    const {data,loading} =  useFetch(`/trending/all/${endpoint}`)
    
    const onTabChange = (tab)=>{
        console.log(tab);
        setEndpoint(tab=="0"?"day":"week")
    }
    
    
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carsousel data={data?.results} loading={loading} />

        </div>
    )
}

export default Trending
