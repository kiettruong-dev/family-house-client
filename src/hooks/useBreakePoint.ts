import { Grid } from "antd";
import { useEffect, useState } from "react";

const { useBreakpoint } = Grid;
export const useBreakPoint = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();

  useEffect(() => {
    setIsMobile(!!xs);
    setIsTablet(!!sm || !!md);
    setIsDesktop(!!md || !!lg || !!xl || !!xxl);
  }, [xs, sm, md, lg, xl, xxl]);

  return { isMobile, isTablet, isDesktop };
};
