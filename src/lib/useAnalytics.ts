import firebase from 'firebase/app';
import 'firebase/analytics';
import { useEffect, useRef } from 'react';
import { Router } from 'next/router';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function useAnalytics() {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      isInitialized.current = true;
    }

    const logPageView = () => {
      firebase.analytics().logEvent('page_view', {
        page_location: window.location.host,
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    Router.events.on('routeChangeComplete', logPageView);

    return () => {
      Router.events.off('routeChangeComplete', logPageView);
    };
  }, []);
}

export default useAnalytics;
