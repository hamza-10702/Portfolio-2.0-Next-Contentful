import { Suspense } from "react";
import GetContentful from "./getContentful";
import { Loader } from "@/components";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <GetContentful />
    </Suspense>
  );
}
