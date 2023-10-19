import { Hero,HeroStats,Services,WorkingHours,Professionals,Navigation } from "../Components"
export  const HeroPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
       {/* <Professionals /> */}
      <Services />
      <HeroStats />
      <WorkingHours /> 
    </>
  )
}

