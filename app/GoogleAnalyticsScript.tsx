import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TF9HBDPL4G"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-TF9HBDPL4G');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
