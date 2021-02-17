import styled from '@emotion/styled';
import Image from 'next/image';
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
              <StoreButtons />
            </ContentWrapper>
            <ImageWrapper>
              <NotificationImageMobileWrapper>
                <Image
                  src="/assets/images/willread-notification-ios-mobile.png"
                  alt="알림 이미지"
                  width={400}
                  height={105}
                  loading="eager"
                />
              </NotificationImageMobileWrapper>
              <IphoneImageWrapper>
                <Image
                  src="/assets/images/willread-home-iphone.png"
                  alt="윌리드 실행화면"
                  width={344}
                  height={641}
                  loading="eager"
                />
              </IphoneImageWrapper>
              <NotificationImageWrapper>
                <Image
                  src="/assets/images/willread-notification-ios.png"
                  alt="알림 이미지"
                  width={400}
                  height={148}
                  loading="eager"
                />
              </NotificationImageWrapper>
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

const ImageWrapper = styled.div`
  margin: 48px 64px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100%;

  ${media.lessThan('large')} {
    margin: 48px 0 0 0;
  }
`;

const NotificationImageWrapper = styled.div`
  position: absolute;
  top: 120px;
  left: 157px;
  width: 400px;
  height: 148px;

  ${media.lessThan('large')} {
    display: none;
  }
`;

const NotificationImageMobileWrapper = styled.div`
  position: relative;
  top: auto;
  left: auto;
  width: 400px;
  max-width: 100%;
  display: none;
  overflow: hidden;

  ${media.lessThan('large')} {
    display: block;
  }
`;

const IphoneImageWrapper = styled.div`
  width: 344px;
  max-width: 100%;

  ${media.lessThan('large')} {
    margin: 0 0 40px 0;
  }
`;

const StoreButtons = () => (
  <StoreButtonsBlock>
    <StoreButton href="https://play.google.com/store/apps/details?id=com.willread">
      <StoreIcon src="/assets/images/googleplay.png" />
      Google Play
    </StoreButton>
    <StoreButton href="https://apps.apple.com/kr/app/willread-글을-읽는-가장-가벼운-습관/id1551758074">
      <StoreIcon src="/assets/images/appstore.png" />
      App Store
    </StoreButton>
  </StoreButtonsBlock>
);

const StoreButtonsBlock = styled.div`
  margin: 32px 0 0 0;

  ${media.lessThan('large')} {
    margin: 32px -8px 0 -8px;
  }
`;

const StoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  font-size: 18px;
  height: 50px;
  padding: 0 20px;
  background-color: transparent;
  margin: 0 16px 0 0;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${media.lessThan('large')} {
    margin: 0 8px;
  }

  ${media.lessThan('medium')} {
    font-size: 16px;
    height: 44px;
    padding: 0 12px;
  }
`;

const StoreIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;

  ${media.lessThan('medium')} {
    width: 20px;
    height: 20px;
  }
`;
