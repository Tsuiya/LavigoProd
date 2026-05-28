"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function AnalyticsScripts() {
  const gtmId = "GTM-TLZDFKDF";
  const gaId = "G-52202Y30RV";
  const pixelId = "1178074496288870";
  const clarityId = 'wo1dxichdw';
  const adsId = 'AW-9890638758';

  useEffect(() => {
    // Initialize dataLayer immediately on the client side
    window.dataLayer = window.dataLayer || [];
  }, []);

  return (
    <>
      {/* 1. Google Tag Manager (GTM) */}
      {gtmId && (
        <>
          <Script
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
          {/* GTM Noscript Fallback */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      {/* 2. Google Analytics 4 (GA4) Direct Fallback */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* 3. Facebook Pixel Direct Fallback */}
      {pixelId && (
        <>
          <Script
            id="fb-pixel-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
      {/* 4. Microsoft Clarity (Client-Side Injection) */}
      {clarityId && !document.getElementById('clarity-script') && (() => {
        const clarityScript = document.createElement('script');
        clarityScript.id = 'clarity-script';
        clarityScript.async = true;
        clarityScript.innerHTML = `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `;
            document.head.appendChild(clarityScript);
            return null;
          })()
        }

        {/* 5. Google Ads Remarketing (Gtag) */}
        {adsId && (
          <>
            {/* Google Tag (gtag.js) - Loads gtag.js */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
              strategy="afterInteractive"
            />

            {/* Google Ads Initialization */}
            <Script
              id="google-ads-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${adsId}', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </>
        )}
    </>
  );
}
