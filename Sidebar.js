import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Trang chủ"/>
            <SidebarRow Icon={WhatshotIcon} title="Thịnh hành"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Kênh đăng ký"/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="Thư viện" />
            <SidebarRow Icon={HistoryIcon} title="Lịch sử" />
            <SidebarRow Icon={WatchLaterIcon} title="Xem sau" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={ThumbUpIcon} title="Video đã thích" />
            <SidebarRow Icon={ExpandMoreIcon} title="Xem thêm" />
            <hr/>
        </div>
    )
}

export default Sidebar
