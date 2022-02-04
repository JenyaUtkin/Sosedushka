import React, {useState} from 'react';
import { Card } from 'antd';
import UserPage from '../UserPage/UserPage';
import AnnouncementCreate from '../AnnouncementCreate/AnnouncementCreate'
import FormAccount from '../FormAccount/FormAccaunt';


const tabList = [
  {
    key: 'profil',
    tab: 'Профиль',
  },
  {
    key: 'profilRedact',
    tab: 'Редактировать профиль',
  },
  {
    key: 'ad',
    tab: 'Объявление',
  },
];

const contentList = {
  profil: <UserPage/>,
  profilRedact: <FormAccount/>,
  ad: <AnnouncementCreate/>,
};




function UserWrapper(props) {

  const [activeTabKey1, setActiveTabKey1] = useState('profil');

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };


  return (
    <>
      <Card
        style={{ width: '100%' }}
        title="Личный кабинет"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      
      </Card>
    </>
  );
}

export default UserWrapper;
