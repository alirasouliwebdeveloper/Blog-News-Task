import CustomNav from "./nav";
import SearchBarInput from "../Components/SearchBarInput";
import News from "../Components/News";

export default function Root() {
  return (
    <div className="bg-gray-50">
      <div className="h-[100vh] w-[80%] mx-auto">
        <CustomNav />
        <SearchBarInput />
        <News />
      </div>
    </div>
  );
}
