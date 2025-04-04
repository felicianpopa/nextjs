import { serverSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
  const result = serverSideFunction();
  return (
    <div>
      <h1>Server route</h1>
      <p>Result: {result}</p>
    </div>
  );
};

export default ServerRoutePage;
