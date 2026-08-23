import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import './index.scss'; 


const Layout = () => {
    return (
        <div className = "App">
            <Sidebar />
            <div className = 'page'>
                <span clssName = 'tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                
            </div>
        </div>
    )
}

export default Layout