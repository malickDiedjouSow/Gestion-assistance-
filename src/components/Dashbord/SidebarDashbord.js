import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../../assets/css/styleDashbord.css"
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HomeIcon from '@mui/icons-material/Home';

const SidebarDashBord = () => {
    return (
        <aside>
            <nav >
                <ul >
                    
                    {/* <li>
                        <Link to = '/admin/home'> <HomeIcon className="sidebar-icon" /> Home DashBord</Link>
                    </li> */}
                    <li>
                        <Link to = '/admin/techniciens'> <AssignmentTurnedInIcon className="sidebar-icon" /> Techniciens</Link>
                    </li>
                    
                    <li>
                        <Link to = '/admin/gestion-assistance'> <AssignmentTurnedInIcon className="sidebar-icon" /> Taches D'assistance </Link>
                    </li>
                    {/* <li>
                        <Link to = '/admin/ressources'> <AssignmentTurnedInIcon className="sidebar-icon" /> Ressources </Link>
                    </li> */}

                </ul>
            </nav>
            <Outlet/>
        </aside>
    );
}

export default SidebarDashBord;
