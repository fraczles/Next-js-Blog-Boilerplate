import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="about" description="about" />}>
    <Content>
      <p>Just a personal space to share thoughts.</p>
    </Content>
  </Main>
);

export default About;
