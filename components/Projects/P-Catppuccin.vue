<template>
  <div class="rounded-3xl flex w-full max-w-full flex-col bg-rp-surface p-10 something relative">
    <div>
      <h1 class="flex items-center gap-5 font-serif text-4xl text-rp-text">
        <NuxtImg
          alt="Catppuccin logo"
          class="w-16"
          loading="lazy"
          src="https://raw.githubusercontent.com/Tnixc/website-v2/main/src/assets/catppuccin.webp"
        />Maintainer at Catppuccin
      </h1>
      <p class="py-4 pb-2 text-lg text-rp-subtle">
        A very nice color scheme. I write css(pain) for userstyles. And they
        have nice people on discord too.
      </p>
      <a
        href="https://github.com/catppuccin"
        target="_blank"
        class="font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >https://github.com/catppuccin</a
      >
    </div>
  </div>
</template>
<style scoped>
.something::after {
  content: "";
  bottom: -150px;
  left: 150px;
  height: 200px;
  width: 200px;
  border-radius: 999px;
  filter: blur(99px);
  position: absolute;
  background-color: var(--love);
  z-index: -1;
}
</style>
