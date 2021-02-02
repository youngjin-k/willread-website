import styled from '@emotion/styled';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout
      headerProps={{
        clearMode: true,
      }}
    >
      <HeroSection>
        <ContentWrapper>
          <HeroCopy>
            글을 읽는
            <br />
            가벼운 습관,
            <br />
            윌리드
          </HeroCopy>
          <SubCopy>곧 만나요.</SubCopy>
        </ContentWrapper>
        <ImageWrapper>
          <IphoneImage src="/assets/images/willread-home-iphone.png" />
          <NotificationImage src="/assets/images/willread-notification-ios.png" />
        </ImageWrapper>
      </HeroSection>
    </Layout>
  );
}

const HeroSection = styled.section`
  background: linear-gradient(102.62deg, #6e57ff 18.85%, #a498f1 80.86%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  margin: 0 120px 0 0;
`;

const HeroCopy = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 70px;
  color: #ffffff;
  margin: 0;
`;

const SubCopy = styled.h3`
  font-size: 32px;
  color: rgb(221, 217, 243);
  margin: 32px 0 0 0;
`;

const ImageWrapper = styled.div`
  margin: 120px 0 0 120px;
  position: relative;
`;

const IphoneImage = styled.img`
  display: block;
  width: 344px;
`;

const NotificationImage = styled.img`
  position: absolute;
  top: 87px;
  left: 120px;
  display: block;
  width: 400px;
`;
