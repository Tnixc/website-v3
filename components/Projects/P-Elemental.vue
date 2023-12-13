<template>
  <div class="rounded-3xl flex w-min max-w-full flex-col bg-rp-surface p-10">
    <NuxtImg
      class="max-w-lg"
      loading="lazy"
      src="https://raw.githubusercontent.com/Tnixc/website-v2/main/src/assets/elemental.webp"
    />

    <div>
      <h1 class="font-serif text-4xl text-rp-text">Elemental</h1>
      <p class="py-4 text-lg text-rp-subtle">
        A website to help you with chemistry calculations. Built with Vue and
        TypeScript, it mainly processes data from a json and matches it to the
        input.
      </p>
      <a
        href="https://elemental-mocha.vercel.app"
        target="_blank"
        class="font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >https://elemental-mocha.vercel.app</a
      >
    </div>
  </div>
</template>
