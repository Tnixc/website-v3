<template>
  <div
    class="rounded-3xl something relative flex max-w-full flex-col bg-rp-surface p-10"
  >
    <NuxtImg
      alt="screenshot of Elemental website"
      width="512"
      class="max-w-lg w-full"
      loading="lazy"
      src="https://raw.githubusercontent.com/Tnixc/website-v2/main/src/assets/elemental.webp"
    />
      <h1 class="font-serif text-4xl text-rp-text">Elemental</h1>
      <p class="py-4 text-lg text-rp-subtle">
        A website to help you with chemistry calculations. Built with Vue and
        TypeScript, it mainly processes data from a json and matches it to the
        input.
      </p>
      <a
        href="https://elemental-mocha.vercel.app"
        target="_blank"
        class="font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline mt-auto mb-0"
        >elemental-mocha.vercel.app</a
      >
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
