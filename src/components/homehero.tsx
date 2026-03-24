export default function HomeHero() {
    return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(/publicHero.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to MedCast!</h1>
      <p className="mb-5">
      The platform that transforms how healthcare services are managed and delivered.
      </p>
      <button className="btn btn-primary"><a href="/signup" className="text-white no-underline">Get Started</a></button>
    </div>
  </div>
</div>
    )
}