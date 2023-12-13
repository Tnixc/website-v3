<script>useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})</script>
<template>
  <body class="flex h-screen justify-center bg-black">
    <main class="w-[98vw] max-w-7xl">
      <Landing />
      <a id="about"></a>
      <GraphicOne class="ml-auto mr-auto w-full" />
      <About />
      <a id="skills"></a>
      <GraphicTwo class="ml-auto mr-auto w-full" />
      <Skills />
      <a id="projects"></a>
      <GraphicThree class="ml-auto mr-auto w-full" />
      <Projects />
      <a id="contact"></a>
      <Contact />
      <LazyFooter/>
    </main>
    <Nav />
  </body>
</template>
<style>
*{
  scroll-behavior: smooth;
}
:root {
  --base: #191724;
  --surface: #1f1d2e;
  --overlay: #26233a;
  --muted: #6e6a86;
  --subtle: #908caa;
  --text: #e0def4;
  --love: #eb6f92;
  --gold: #f6c177;
  --rose: #ebbcba;
  --pine: #31748f;
  --foam: #9ccfd8;
  --iris: #c4a7e7;
  --highlightLow: #21202e;
  --highlightMed: #403d52;
  --highlightHigh: #524f67;
  --rpd-base: #faf4ed;
  --rpd-surface: #fffaf3;
  --rpd-overlay: #f2e9e1;
  --rpd-muted: #9893a5;
  --rpd-subtle: #797593;
  --rpd-text: #575279;
  --rpd-love: #b4637a;
  --rpd-gold: #ea9d34;
  --rpd-rose: #d7827e;
  --rpd-pine: #286983;
  --rpd-foam: #56949f;
  --rpd-iris: #907aa9;
  --rpd-highlightLow: #f4ede8;
  --rpd-highlightMed: #dfdad9;
  --rpd-highlightHigh: #cecacd;
}
</style>
