export default function Footer () {

  // get the current year
  const year = new Date().getFullYear()

  return (
    <footer className="flex items-center w-full">
      <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-xs leading-5 text-center text-gray-500">
            &copy; {year} Jordi Capellades for Midudev Hackathon 👨🏻‍💻.
          </p>
        </div>
      </div>
    </footer>
  )
}
