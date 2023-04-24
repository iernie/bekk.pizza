module.exports = {
  async redirects() {
    return [
      {
        source: "/teatro",
        destination: "https://skjer.bekk.no/pizza",
        permanent: false,
      },
    ];
  },
};
