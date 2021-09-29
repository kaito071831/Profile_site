import React from 'react';
import IntroCard from './IntroCard';
import { Profile } from './Profile';
import { History } from './History';
import { Language } from './Language';
import { Card } from '@mui/material';
import { Hobby } from './Hobby';
import styled from 'styled-components';

const IntroStyle = styled.div`
  margin-bottom: 10px;
`;

const Body: React.FC = () => {
  return(
    <>
      {/* プロフィールのコンポーネント */}
      <IntroStyle>
        <Card variant="outlined">
          <IntroCard 
            title = 'My Profile'
            plain = {<Profile />}
            id = 'profile'
          />
        </Card>
      </IntroStyle>

      {/* 趣味のコンポーネント */}
      <IntroStyle>
        <Card variant="outlined">
          <IntroCard 
            title = 'My Hobby'
            plain = {<Hobby />}
            id = 'hobby'
          />
        </Card>
      </IntroStyle>

      {/* 使用言語のコンポーネント */}
      <IntroStyle>
        <Card variant="outlined">
          <IntroCard
            title = 'Language'
            plain = {<Language />}
            id = 'lang'
          />
        </Card>
      </IntroStyle>

      {/* 経歴のコンポーネント */}
      <IntroStyle>
        <Card variant="outlined">
          <IntroCard 
            title = 'My History'
            plain = {<History />}
            id = 'history'
          />
        </Card>
      </IntroStyle>
    </>
  )
}

export default Body;