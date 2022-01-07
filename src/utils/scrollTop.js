import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, [pathname]);
    return props.children;
  }