import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import containerStyle from '../../styles/containerStyle';

function privacy() {
  return (
    <Layout>
      <NextSeo title="개인정보 처리방침 - willread" />
      <PrivacyBlock>
        <Container>
          <h1>개인정보 처리방침</h1>
        </Container>
      </PrivacyBlock>
    </Layout>
  );
}

const PrivacyBlock = styled.main`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  ${containerStyle};
`;

export default privacy;
