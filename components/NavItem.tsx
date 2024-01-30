import React from 'react'
interface ItemProps{
  name: string;
  active?: boolean;
}
const NavItem:React.FC<ItemProps> = ({name,active}) => {
  return (
    <div>NavItem</div>
  )
}

export default NavItem