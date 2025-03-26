import Link from "next/link";
const F1 = () => {
  return (
    <div>
      <h1>F1 page</h1>
      <ul className="flex space-x-4 text-blue-400">
        <li>
          <Link href="/f1/f2">F2 page</Link>
        </li>
        <li>
          <Link href="/f3">F3 page</Link>
        </li>
      </ul>
    </div>
  );
};

export default F1;
