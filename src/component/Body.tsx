import React from 'react';
import IntroCard from './IntroCard';
import { Profile } from './Profile';
import { History } from './History';
import { Language } from './Language';
import { Card } from '@mui/material';
import { Hobby } from './Hobby';
import styled from 'styled-components';

const IntroStyle = styled.div`
  margin-bottom: 30px;
  filter:
    drop-shadow(
      1px 2px 8px hsla(0, 0%, 0%, 0.5)
    )
    drop-shadow(
      2px 4px 16px hsla(0, 0%, 0%, 0.5)
    )
    drop-shadow(
      4px 8px 32px hsla(0, 0%, 0%, 0.5)
    );
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