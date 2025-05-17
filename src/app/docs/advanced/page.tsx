import Arrays from "./arrays";
import Chakra from "./chakra";
import Functions from "./functions";
import Hashmaps from "./hashmaps";
import Hashsets from "./hashsets";
import HashsetOps from "./hashsetsops";

export default function Page() {
  return (
    <div className="text-white min-h-screen">
      <h1 className="docs-header text-4xl mb-4">Advanced</h1>

      <p className="mb-4">
        Let&apos;s now explore advance concepts. Here we come across, loops,
        functions, arrays, hashmaps, hashsets
      </p>

      <Chakra />
      <Functions />
      <Arrays />
      <Hashmaps />
      <Hashsets />
      <HashsetOps />
    </div>
  );
}
