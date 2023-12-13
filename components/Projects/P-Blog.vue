<template>
  <div class="rounded-3xl flex flex-col bg-rp-surface p-10">
    <div>
      <h1 class="font-serif text-4xl text-rp-text">Blog</h1>
      <p class="py-4 text-lg text-rp-subtle">
        A simple blog built with Nuxt and Tailwind. It uses the Nuxt Content
        module to generate pages from markdown files.
      </p>
      <a
        href="https://blog.tnixc.space"
        target="_blank"
        class="font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >https://blog.tnixc.space</a
      >
    </div>
    <NuxtImg
      class="max-w-xl"
      loading="lazy"
      src="https://raw.githubusercontent.com/Tnixc/website-v2/main/src/assets/blog.webp"
    />
  </div>
</template>
