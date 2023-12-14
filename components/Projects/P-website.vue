<template>
  <div class="rounded-3xl flex w-full max-w-full flex-col bg-rp-surface p-10 relative something">
    <div>
      <h1 class="flex items-center gap-5 font-serif text-4xl text-rp-text">
        This website
      </h1>
      <p class="py-4 pb-2 text-lg text-rp-subtle">
        I have rewritten this website so many goddamn times. this is only v3.
        Want to go back in time? See v1 or v2, they get progressively worse.
      </p>
      <a
        href="https://old-v1-tnixc.vercel.app/"
        target="_blank"
        class="inline font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >https://old-v1-tnixc.vercel.app/</a
      >
      <span class="inline-block w-4"></span>
      <span class="select-none text-rp-subtle">|</span>
      <span class="inline-block w-4"></span>
      <a
        href="https://website-v2-tnixc.vercel.app"
        target="_blank"
        class="inline font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >https://website-v2-tnixc.vercel.app</a
      >
    </div>
  </div>
</template>
<style scoped>
.something::after {
  content: "";
  bottom: -150px;
  right: 10px;
  height: 200px;
  width: 200px;
  border-radius: 999px;
  filter: blur(99px);
  position: absolute;
  background-color: var(--iris);
  z-index: -1;
}
</style>
