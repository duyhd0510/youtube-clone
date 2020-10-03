import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"
import "./SearchPage.css"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="659K"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />
            <hr/>

            <VideoRow
                views = "1.4M"
                subs = "659K"
                description = "Do you want a Free one hour training..."
                timestamp = "59 seconds ago"
                channel="Clever Programmer"
                title ="Let's build a youtube clone with React JS for begginer"
                image = "https://i.ytimg.com/an_webp/B-kxUMHBxNo/mqdefault_6s.webp?du=3000&sqp=COCqqPoF&rs=AOn4CLAh0rD1CyRWWplpj8jkHAi9RmzY_g"
            />

            <VideoRow
                views = "1.4M"
                subs = "659K"
                description = "Do you want a Free one hour training..."
                timestamp = "59 seconds ago"
                channel="Clever Programmer"
                title ="Let's build a youtube clone with React JS for begginer"
                image = "https://i.ytimg.com/an_webp/B-kxUMHBxNo/mqdefault_6s.webp?du=3000&sqp=COCqqPoF&rs=AOn4CLAh0rD1CyRWWplpj8jkHAi9RmzY_g"
            />
                <VideoRow
                views = "1.4M"
                subs = "659K"
                description = "Do you want a Free one hour training..."
                timestamp = "59 seconds ago"
                channel="Clever Programmer"
                title ="Let's build a youtube clone with React JS for begginer"
                image = "https://i.ytimg.com/an_webp/B-kxUMHBxNo/mqdefault_6s.webp?du=3000&sqp=COCqqPoF&rs=AOn4CLAh0rD1CyRWWplpj8jkHAi9RmzY_g"
            />

        </div>
    )
}

export default SearchPage
