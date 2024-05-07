export default function CustomNav() {
  return (
    <div className="w-full">
      <h1 className="text-center text-[2rem]  p-2">Blog Task Project</h1>
      <nav className="">
        <ul className="flex flex-row gap-4">
          <li>
            <a className="p-1" href={`/contacts/1`}>
              Your Name
            </a>
          </li>
          <li>
            <a className="p-1" href={`/contacts/2`}>
              Your Friend
            </a>
          </li>
        </ul>
      </nav>
      <hr className="shadow-sm" />
    </div>
  );
}
