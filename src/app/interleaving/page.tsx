// import { ServerComponentOne } from "@/components/server-component-one";
import { ClientComponentOne } from "@/components/client-component-one";

const InterleavingPage = () => {
  return (
    <div>
      <h1>Interleaing Page</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne />
    </div>
  );
};

export default InterleavingPage;
