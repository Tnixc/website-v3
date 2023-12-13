<template>
  <div
    class="rounded-3xl flex max-w-full flex-grow flex-col bg-rp-surface p-10 lg:w-1/2 something relative"
  >
    <NuxtImg
      alt="screenshot of Elemental website"
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
<style scoped>
.something::after {
  content: "";
  bottom: -150px;
  right: -150px;
  height: 300px;
  width: 300px;
  border-radius: 999px;
  filter: blur(99px);
  position: absolute;
  background-color: var(--gold);
  z-index: -1;
}
</style>