<template>
  <div class="-mb-20 h-40 rounded-t-6xl bg-gradient-to-b" id="title"></div>
  <h1
    class="flex items-center gap-5 px-8 font-serif text-6xl text-rp-text lg:px-20"
  >
    <svg
      width="60"
      height="60"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_235_983)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.2557 174.653L43.2556 200L56.7444 200L56.7444 174.653C56.7444 164.762 64.7626 156.744 74.6535 156.744L74.7023 156.744L100 156.744L125.296 156.744L125.347 156.744C135.237 156.744 143.256 164.762 143.256 174.653L143.256 200L156.744 200L156.744 174.653C156.744 164.762 164.763 156.744 174.654 156.744L174.702 156.744L200 156.744L200 143.256L174.702 143.256L174.654 143.256C164.763 143.256 156.744 135.238 156.744 125.347L156.744 100L156.744 74.6534C156.744 64.7624 164.763 56.7442 174.654 56.7442L174.702 56.7443L200 56.7443L200 43.2557L174.702 43.2557L174.654 43.2557C164.763 43.2557 156.744 35.2375 156.744 25.3466L156.744 -6.85151e-06L143.256 -6.26191e-06L143.256 25.3466C143.256 35.2375 135.237 43.2557 125.347 43.2557L125.298 43.2557L100 43.2557L74.7022 43.2557L74.6535 43.2557C64.7626 43.2557 56.7444 35.2375 56.7444 25.3466L56.7444 -2.48038e-06L43.2556 -1.89076e-06L43.2556 25.3466C43.2556 35.2375 35.2374 43.2558 25.3465 43.2558L25.2978 43.2557L-1.96582e-06 43.2557L-1.89077e-06 56.7443L25.2964 56.7443L25.3465 56.7442C35.2374 56.7442 43.2557 64.7624 43.2557 74.6534L43.2556 100L43.2557 125.347C43.2557 135.238 35.2374 143.256 25.3465 143.256L25.2978 143.256L-1.96582e-06 143.256L-1.89077e-06 156.744L25.2964 156.744L25.3465 156.744C35.2374 156.744 43.2557 164.762 43.2557 174.653ZM143.256 100L143.256 74.6534C143.256 64.7624 135.237 56.7442 125.347 56.7442L125.296 56.7443L100 56.7443L74.7023 56.7443L74.6535 56.7442C64.7626 56.7442 56.7444 64.7624 56.7444 74.6534L56.7444 100L56.7444 125.347C56.7444 135.238 64.7626 143.256 74.6535 143.256L74.7022 143.256L100 143.256L125.298 143.256L125.347 143.256C135.237 143.256 143.256 135.238 143.256 125.347L143.256 100Z"
          fill="url(#paint0_linear_235_983)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_235_983"
          x1="-4.37114e-06"
          y1="100"
          x2="200"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A7B5FF" />
          <stop offset="1" stop-color="#F3ACFF" />
        </linearGradient>
        <clipPath id="clip0_235_983">
          <rect
            width="200"
            height="200"
            fill="white"
            transform="translate(7.62939e-06 200) rotate(-90)"
          />
        </clipPath>
      </defs></svg
    >projects
  </h1>
  <div class="mt-20 flex flex-wrap justify-around gap-2 overflow-hidden p-1">
    <div class="flex max-w-full flex-wrap gap-2">
      <ProjectsPElemental class="w-1/2 flex-grow ring-2 ring-rp-base/80" />
      <ProjectsPBlog
        class="w-fit max-w-full flex-grow ring-2 ring-rp-base/80 md:w-1/3"
      />
    </div>
    <div class="flex max-w-full flex-wrap gap-2">
      <ProjectsPCatppuccin
        class="w-fit max-w-full flex-grow ring-2 ring-rp-base/80 md:w-min"
      />
      <ProjectsPDotfiles
        class="w-1/2 max-w-full flex-grow ring-2 ring-rp-base/80"
      />
    </div>
    <div class="flex max-w-full flex-wrap gap-2">
      <ProjectsPWebsite
        class="w-1/2 max-w-full flex-grow ring-2 ring-rp-base/80"
      />
      <ProjectsPOther
        class="w-fit max-w-full flex-grow ring-2 ring-rp-base/80 md:w-min"
      />
    </div>
  </div>
</template>
<style scoped>
#title {
  background: radial-gradient(
    131.82% 109.9% at 50% 100%,
    transparent 40.41%,
    var(--rpd-iris) 89.27%,
    var(--iris) 100%
  );
}
</style>
