import './Navbar.css'

const NavbarItem = ({menu, handleMenuSelection, selectedMenus, depth = 0 }) => {
    const { name, path, children = [] } = menu;
    return (
        <>
            {children.length > 0 ? (
                <li className='nested-dropdowns__item'>
                    <div  onMouseEnter={() => handleMenuSelection(name, depth)}>
                        {name}
                    </div>
                    {selectedMenus[depth] === name && (
                     <ul>
                        {children.map((child, i) => {
                         const { name } = child;
                         const childDepth = depth + 1;
                         return (
                           <NavbarItem
                             menu={child}
                             handleMenuSelection={handleMenuSelection}
                             key={`child-${name}-${i}`}
                             depth={childDepth}
                             selectedMenus={selectedMenus}
                           />
                         );
                        })}
                     </ul>
                    )}
                </li>
            ) : (
                <a onMouseEnter={() => handleMenuSelection('', depth)} href={path}>{name}</a>
            )}
        </>
    )
}

export default NavbarItem;