module.exports = {
  mount: {
    // 입맛대로 가능 (대신 폴더 경로등을 내가 맞춰줘야함)
    public: "/", // root 폴더
    // 단, src 수정시에는 public 폴더의 index.html의 script 부분의 경로도 동일하게 맞춰준다.
    src: "/dist", // build 경로 (기본은 _dist_)
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-optimize",
    "@snowpack/plugin-babel",
    "@snowpack/plugin-sass",
  ],
  // 경로 별칭
  alias: {
    "~": "./src",
  },
  devOptions: {
    port: 8080, // 기본 값은 8080
    open: "none", // 실행시 브라우저 오픈 유무
  },
};
