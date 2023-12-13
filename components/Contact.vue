<template>
  <div
    class="relative h-[80vh] overflow-hidden rounded-b-6xl text-rp-text"
    id="main"
  >
    <h1
      class="flex items-center justify-center gap-10 pt-40 font-serif text-6xl"
    >
      contact
    </h1>
    <div
      class="flex flex-col items-center justify-center gap-4 p-20 font-mono text-rp-text"
    >
      <a
        target="_blank"
        href="https://github.com/Tnixc"
        class="text-center text-2xl text-rp-pine transition-all hover:text-rp-foam hover:underline"
        >Github: Tnixc</a
      >
      <a
        target="_blank"
        href="https://x.com/Tnixc"
        class="text-center text-2xl text-rp-pine transition-all hover:text-rp-foam hover:underline"
        >Twitter: Tnixc</a
      >
      <p href="https://github.com/Tnixc" class="text-center text-2xl">
        Discord: @Tnixc
      </p>
      <p href="https://github.com/Tnixc" class="text-center text-2xl">
        Email: tnixxc@gmail.com
      </p>
    </div>
  </div>
</template>
<style scoped>
#main {
  background: radial-gradient(
    140% 107.13% at 50% 10%,
    transparent 67.41%,
    var(--love) 87.27%,
    var(--text) 111%
  );
}
#main::after {
  content: "";
  left: -10px;
  top: 0;
  height: 100%;
  width: 20px;
  position: absolute;
  filter: blur(10px);
  background: linear-gradient(45deg, var(--love), transparent);
  z-index: 1;
}
#main::before {
  content: "";
  right: -10px;
  top: 0;
  height: 100%;
  width: 20px;
  position: absolute;
  filter: blur(10px);
  background: linear-gradient(45deg, var(--love), transparent);
  z-index: 1;
}
</style>
