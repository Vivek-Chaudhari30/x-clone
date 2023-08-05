import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon' />
        <SidebarOption active Icon ={HomeIcon}  text = "Home"/>
        <SidebarOption Icon = {SearchIcon} text = "Explore"/>
        <SidebarOption Icon = {NotificationsNoneIcon} text = "Notifications"/>
        <SidebarOption Icon = {MessageIcon} text = "Messages"/>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />


      <button variant="outlined" className="sidebar__tweet" fullWidth >
      Tweet
      </button>
        {/* */}
        {/* */}
        {/* */}
        {/* */}
        
    </div>
  )
}

export default Sidebar;