import { NavItem, NavLink } from "react-bootstrap"
import { SidebarLinks } from "../data/SidebarLinks"
function Sidebar() {
    return (
        <div>
            {
                SidebarLinks.map((linkItem) => {
                    console.log(linkItem);
                    return (
                        <NavItem key={linkItem.id}>
                            <NavLink href={linkItem.link}>{linkItem.name}</NavLink>
                        </NavItem>
                    )
                }
                )
            }
        </div>
    )

}

export default Sidebar