import React,{useState} from 'react'
import Carsousel from '../../../components/carousel/Carsousel'



import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

import useFetch from '../../../hooks/useFetch'

const TopRated = () => {
    
    const [endpoint, setEndpoint] = useState("movie")
    
    const {data,loading} =  useFetch(`/${endpoint}/top_rated`)
    
    const onTabChange = (tab)=>{
        console.log(tab);
        setEndpoint(tab=="0"?"movie":"tv")
    }
    
    
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Top Rated</span>
                <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carsousel data={data?.results} loading={loading} />

        </div>
    )
}

export default TopRated
