<template>
  <div
    class="rounded-full fixed left-1/2 top-4 flex h-16 w-[90vw] max-w-5xl -translate-x-1/2 items-center overflow-scroll bg-rp-base/50 text-rp-text shadow-2xl ring-2 ring-rp-muted/30 backdrop-blur-lg md:w-[95%]"
  >
    <NuxtImg
      draggable="false"
      class="rounded-full hidden aspect-square h-full max-h-full scale-75 ring-2 ring-rp-love md:block"
      src="https://avatars.githubusercontent.com/u/85466117?v=4"
    />
    <p class="hidden px-2 pb-1 font-serif text-2xl md:block">Tnixc</p>
    <div class="md:ml-auto md:mr-0 flex px-5 mx-auto">
      <a
        class="cursor-pointer px-4 pb-1 font-serif text-2xl text-rp-foam underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        href="#about"
        >About</a
      >
      <a
        class="cursor-pointer px-4 pb-1 font-serif text-2xl text-rp-rose underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        href="#skills"
        >Skills</a
      >
      <a
        class="cursor-pointer px-4 pb-1 font-serif text-2xl text-rp-iris underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        href="#projects"
        >Projects</a
      >
      <a
        class="cursor-pointer px-4 pb-1 font-serif text-2xl text-rp-love underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        href="#contact"
        >Contact</a
      >
      <a
        class="flex cursor-pointer items-center gap-2 px-4 pb-1 font-serif text-2xl text-rp-gold underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        href="https://blog.tnixc.space"
        target="_blank"
        >Blog
        <svg width="19" height="19">
          <g transform="translate(-126.19736,-766.93049)">
            <path
              style="fill: currentColor"
              d="M 144.54801,768.20251 C 143.61103,770.13573 143.14255,772.27055 143.14258,774.607 C 143.14255,775.42535 143.21371,776.15476 143.35606,776.79519 L 142.48434,777.7025 C 141.68969,776.13697 141.22714,774.32829 141.0967,772.27647 L 128.09202,785.28114 L 126.84671,784.03583 L 139.85138,771.03116 C 137.79956,770.91257 135.99088,770.45596 134.42535,769.6613 L 135.33266,768.77179 C 135.98495,768.91414 136.71436,768.9853 137.52085,768.98528 C 139.8573,768.9853 141.99805,768.51682 143.94314,767.57984 L 144.54801,768.20251 z"
              id="text5882"
            />
          </g></svg
      ></a>
    </div>
  </div>
</template>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
