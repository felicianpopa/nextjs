import { Card } from "@/app/components/card";
import Link from "next/link";
const Notifications = () => {
  return (
    <Card>
      <div>Notifications default</div>
      <div>
        <Link
          className="ext-blue-500 hover:underline text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          href="/complex-dashboard/archived"
        >
          Archived
        </Link>
      </div>
    </Card>
  );
};

export default Notifications;
