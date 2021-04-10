import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Hello!! 
          I'm yong-jin Cho.
          My hobby is to watch the sports game like soccer, baseball, and tennis
          and to cook for the family.
          And my wish is to travel to the UK and watch the 'Son' playing on the pitch.
          I like most of the food that I have eaten before except for spicy food.


      </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}