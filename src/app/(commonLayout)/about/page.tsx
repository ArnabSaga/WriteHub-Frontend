export const dynamic = "force-dynamic";

const AboutPage = async () => {
  //* For simulating load time
  await new Promise((reslove) => setTimeout(reslove, 4000));

  //* For simulating error
  // throw new Error("Something went wrong");
  return (
    <div>
      <h1>This is the about page</h1>
    </div>
  );
};

export default AboutPage;
