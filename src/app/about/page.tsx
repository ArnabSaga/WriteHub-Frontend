const AboutPage = async () => {
  await new Promise((reslove) => setTimeout(reslove, 4000));

  throw new Error("Something went wrong");
};

export default AboutPage;
