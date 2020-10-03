import React from 'react'
import VideoCard from "./VideoCard";
import "./RecomendedVideos.css";

function RecomendedVideos() {
    return (
        <div className ="recomendedVideos">
            <h2>Recomended</h2>
            <div className="recomendedVideos__videos">
                <VideoCard
                    title="Become a web developer in 10 min | 2019-2020"
                    views = "2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0xffffffff-no-rj-mo"
                    channel="Sonny Sangha"
                    image="https://i.ytimg.com/an_webp/du_FuBTrclo/mqdefault_6s.webp?du=3000&sqp=CLT5m_oF&rs=AOn4CLBDFYVSikkvVhi53KgwnNAOTMB8Qw"
                />
                <VideoCard
                    title="Tin nosng bóng đá 27/8 | Barca muốn tước hết quyền lực của M10"
                    views = "12.3K Views"
                    timestamp="1 hour ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gh0HRlLRedFHG49d4WU40WxJv74Z-kv0rSxoA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Tuyền Văn Hóa"
                    image="https://i.ytimg.com/an_webp/Qo9hBYbC4sw/mqdefault_6s.webp?du=3000&sqp=CIjfm_oF&rs=AOn4CLCppL_O7d-MxHj4O86OF0zIySn0dA"
                />
                <VideoCard
                    title="Cách học từ vựng hiệu quả"
                    views = "12K Views"
                    timestamp="4 tuần trước"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GhwVqLH8_t3vo31K1C2D-Ukw1L3afuH7N13yQ=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Samurai Chan offical channel"
                    image="https://i.ytimg.com/an_webp/cNiHR0gRE9w/mqdefault_6s.webp?du=3000&sqp=COjqm_oF&rs=AOn4CLAJQ6mbKka7bGs2zfpm-YvCmp5Y0g"
                />
                <VideoCard
                    title="Có gì mới ở Chelsea với Kai Havertz, Ben Chillwell và Thiago Silva?"
                    views = "128K Views"
                    timestamp="20h trước"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GiKFEUhAgRDEIR_GGJLVgHUEN9lSnhMVHXVdg=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="BLV Anh Quân"
                    image="https://i.ytimg.com/an_webp/BobOb6pbBKs/mqdefault_6s.webp?du=3000&sqp=CK-JnPoF&rs=AOn4CLAx5y2OYLbtTbMS6ggOe5TkbBZceA"
                />
                <VideoCard
                    title="Hành trình C1 | Barcelona"
                    views = "103K Views"
                    timestamp="1 tuần trước"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GibKvimvB9pa1IwxNKsODaRK4Qb1PFSKuP3SQ=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Kplus Sports"
                    image="https://i.ytimg.com/an_webp/xiXLAmz7ujw/mqdefault_6s.webp?du=3000&sqp=CJiPnPoF&rs=AOn4CLBvLpIDuGw550SvnjIJjKBcp432iw"
                />

            </div>
        </div>
    )
}

export default RecomendedVideos
