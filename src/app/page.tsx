import Contents from "@/components/Contents";

export default function Home() {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover flex flex-col gap-3 justify-end py-9 px-5 font-english text-white"
        style={{
          backgroundImage: `url('/images/kv.jpg')`,
          height: "60vh",
        }}
      >
        <h1 className="font-bold text-3xl">Skin Care</h1>
        <p className="text-xs">
          Your Personalized Skincare Journey.
          <br />
          Dive into Our AI-Powered Analysis for Customized Care!
        </p>
      </div>
      <Contents />
    </>
  );
}
