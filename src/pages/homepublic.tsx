import HomeHero from "../components/homehero"
import Navbar from "../components/navbar"

export default function HomePublic() {
      return (
    <>
      <Navbar isLogged={false} />
       <HomeHero />
    </>
  )

}