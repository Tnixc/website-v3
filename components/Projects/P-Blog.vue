<template>
  <div
    class="rounded-3xl something relative flex max-w-full flex-col bg-rp-surface p-10"
  >
    <div>
      <h1 class="font-serif text-4xl text-rp-text">Blog</h1>
      <p class="py-4 text-lg text-rp-subtle">
        A simple blog built with Nuxt and Tailwind. It uses the Nuxt Content
        module to generate pages from markdown files. I want to consolidate it
        into this site eventually. Also gonna rewrite it with Astro cus it is
        slow as hell rn.
      </p>
      <a
        href="https://blog.tnixc.space"
        target="_blank"
        class="font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >blog.tnixc.space</a
      >
    </div>
    <NuxtImg
      width="512"
      alt="screenshot of blog"
      class="w-full max-w-lg"
      loading="lazy"
      src="https://raw.githubusercontent.com/Tnixc/website-v2/main/src/assets/blog.webp"
    />
  </div>
</template>
<style scoped>
.something::after {
  content: "";
  bottom: -150px;
  left: 50px;
  height: 200px;
  width: 200px;
  border-radius: 999px;
  filter: blur(99px);
  position: absolute;
  background-color: var(--iris);
  z-index: -1;
}
</style>
