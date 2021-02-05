import styled from '@emotion/styled';
import Layout from '../components/Layout';
import containerStyle from '../styles/containerStyle';
import media from '../styles/media';

export default function Home() {
  return (
    <Layout
      headerProps={{
        clearMode: true,
      }}
    >
      <HomeBlock>
        <HeroSection>
          <Conatiner>
            <ContentWrapper>
              <HeroCopy>
                글을 읽는
                <br />
                가장 가벼운 습관,
                <br />
                윌리드
              </HeroCopy>
              <SubCopy>곧 만나요.</SubCopy>
            </ContentWrapper>
            <ImageWrapper>
              <NotificationImage
                src="/assets/images/willread-notification-ios.png"
                alt="알림 이미지"
              />
              <NotificationImageMobile
                src="/assets/images/willread-notification-ios-mobile.png"
                alt="알림 이미지"
              />
              <IphoneImage
                src="/assets/images/willread-home-iphone.png"
                alt="윌리드 실행화면"
              />
            </ImageWrapper>
          </Conatiner>
        </HeroSection>
      </HomeBlock>
    </Layout>
  );
}

const HomeBlock = styled.main`
  position: relative;
  height: 100%;
  min-height: 800px;

  ${media.lessThan('large')} {
    height: auto;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(102.62deg, #6e57ff 18.85%, #a498f1 80.86%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${media.lessThan('large')} {
    background: linear-gradient(166.88deg, #6e57ff 6.1%, #a498f1 99.33%);
  }
`;

const Conatiner = styled.div`
  ${containerStyle};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan('large')} {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  ${media.lessThan('large')} {
    flex-direction: column;
  }
`;

const HeroCopy = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 70px;
  color: #ffffff;
  margin: 0;

  ${media.lessThan('large')} {
    font-size: 32px;
    line-height: 1.4;
    text-align: center;
    margin: 112px 0 0 0;
  }
`;

const SubCopy = styled.p`
  font-size: 32px;
  color: rgb(221, 217, 243);
  margin: 32px 0 0 0;
  font-weight: bold;

  ${media.lessThan('large')} {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  margin: 48px 64px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.lessThan('large')} {
    margin: 48px 0 0 0;
  }
`;

const NotificationImage = styled.img`
  position: absolute;
  top: 120px;
  left: 157px;
  width: 400px;
  display: block;

  ${media.lessThan('large')} {
    display: none;
  }
`;

const NotificationImageMobile = styled.img`
  position: relative;
  top: auto;
  left: auto;
  width: 400px;
  max-width: 100%;
  display: none;

  ${media.lessThan('large')} {
    display: block;
  }
`;

const IphoneImage = styled.img`
  display: block;
  width: 344px;
  max-width: 100%;

  ${media.lessThan('large')} {
    margin: 0 0 40px 0;
  }
`;
