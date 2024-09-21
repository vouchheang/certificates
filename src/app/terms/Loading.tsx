import { Suspense } from "react";
import { Ellipsis } from "react-css-spinners";
export default function LoadingSkeleton() {
  return (
    <Suspense>
    <div style={{backgroundColor: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Ellipsis color="rgba(33,126,41,1)" size={151} />
    </div></Suspense>
  );
}