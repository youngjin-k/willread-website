import styled from '@emotion/styled';
import Layout from '../../components/Layout';
import containerStyle from '../../styles/containerStyle';

function privacy() {
  return (
    <Layout>
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
