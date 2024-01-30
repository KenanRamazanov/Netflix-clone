import useCurrentUser from '@/hooks/useCurrentUser';
import React from 'react'
interface AccountProp{
    visible?:boolean
}

const AccountMenu: React.FC<AccountProp>=({visible})=> {

    const {data : user } = useCurrentUser();

    if(!visible){

        return null;
    }

  return (
    <div>
    AccountMenu
    </div>
  )
}

export default AccountMenu