import { useState } from "react";
import NavbarItem from "./NavbarItem";
import './Navbar.css';

const Navbar = (props) => {
    const { menuItems } = props;
    const [selectedMenus, setSelectedMenus] = useState([]);

    const handleMenuSelection = (name, depth) => {
        setSelectedMenus((selectedMenus) => {
          const newSelectedMenus = [...selectedMenus];
          // cut the menus to depth lenght
          newSelectedMenus.length = depth;
          if (name !== '') {
            newSelectedMenus[depth] = name;
          }
          return newSelectedMenus;
        });
      };
// onMouseLeave={() => setSelectedMenus([])}
      return (
        <>
            <h1>Complicated Pure CSS Drop Down Menu</h1>
            <ul className="nested-dropdowns" onMouseLeave={() => setSelectedMenus([])}>
                {menuItems.map((menu) => {
                    return (
                        <NavbarItem 
                            menu={menu}
                            handleMenuSelection={handleMenuSelection}
                            key={menu.name}
                            selectedMenus={selectedMenus}/>
                    );
                })}
            </ul>
        </>
      )
}

export default Navbar;